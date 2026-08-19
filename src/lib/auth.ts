import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Single-operator auth for the CMS: one password, verified against a scrypt
 * hash, exchanged for an HMAC-signed session cookie. No user table and no auth
 * library, because there is exactly one role. Swap in a provider here if the
 * editorial team ever needs individual logins.
 *
 * The environment holds only the hash, so reading .env does not hand anyone a
 * working login. Generate one with `npm run admin:hash`.
 */

export const SESSION_COOKIE = "tn_session";
const MAX_AGE_SECONDS = 60 * 60 * 12;

function secret(): string {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 16) {
    throw new Error("AUTH_SECRET must be set to at least 16 characters");
  }
  return value;
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function createSessionToken(): string {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  return `${expires}.${sign(String(expires))}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  if (Number(expires) < Date.now()) return false;
  try {
    return safeEqual(signature, sign(expires));
  } catch {
    return false;
  }
}

const SCRYPT_KEY_BYTES = 64;

/** Produces the `salt:hash` string stored in ADMIN_PASSWORD_HASH. */
export function hashPassword(password: string, salt = randomBytes(16).toString("hex")): string {
  return `${salt}:${scryptSync(password, salt, SCRYPT_KEY_BYTES).toString("hex")}`;
}

export function checkPassword(input: string): boolean {
  const stored = process.env.ADMIN_PASSWORD_HASH;
  if (!stored) throw new Error("ADMIN_PASSWORD_HASH is not set — run `npm run admin:hash`");

  const [salt, expected] = stored.split(":");
  if (!salt || !expected) throw new Error("ADMIN_PASSWORD_HASH must be in salt:hash form");

  try {
    // scrypt is deliberately slow, which is the point; the comparison is
    // constant-time so a wrong password leaks nothing through timing.
    const actual = scryptSync(input, salt, SCRYPT_KEY_BYTES).toString("hex");
    return safeEqual(actual, expected);
  } catch {
    return false;
  }
}

export async function startSession() {
  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}

/** Guard for every admin server action. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAuthenticated())) throw new Error("Not authenticated");
}
