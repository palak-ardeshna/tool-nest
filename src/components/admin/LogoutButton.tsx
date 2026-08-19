import { logoutAction } from "@/app/actions/admin";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-ink hover:bg-surface"
      >
        Sign out
      </button>
    </form>
  );
}
