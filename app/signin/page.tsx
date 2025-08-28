// app/signin/page.tsx
"use client";

import { useAuthActions } from "@convex-dev/auth/react";

export default function SignInPage() {
  const { signIn } = useAuthActions();
  return (
    <main style={{ padding: 24 }}>
      <h1>Вход</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={() => signIn("google")}>
        Войти через Google
      </button>
    </main>
  );
}
