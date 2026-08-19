/**
 * Generates the value for ADMIN_PASSWORD_HASH.
 *
 *   npm run admin:hash -- "your password"
 *   npm run admin:hash                      (prompts instead)
 */
import { createInterface } from "node:readline/promises";
import { hashPassword } from "../src/lib/auth";

async function promptForPassword(): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question("New admin password: ");
  rl.close();
  return answer.trim();
}

async function main() {
  const password = process.argv.slice(2).join(" ").trim() || (await promptForPassword());

  if (password.length < 12) {
    console.error("Use at least 12 characters — this is the only credential for the CMS.");
    process.exit(1);
  }

  console.log("\nAdd this line to your .env:\n");
  console.log(`ADMIN_PASSWORD_HASH="${hashPassword(password)}"\n`);
}

main();
