import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = { title: "Sign in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-card border border-line bg-white p-6 shadow-card">
        <h1 className="text-lg font-extrabold tracking-tight text-ink">
          ToolNest <span className="text-muted">CMS</span>
        </h1>
        <p className="mt-1 text-sm text-muted">Sign in to manage content.</p>
        <LoginForm next={next} />
      </div>
    </div>
  );
}
