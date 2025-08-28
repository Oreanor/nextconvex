"use client";

import { useAuthActions } from "@convex-dev/auth/react";

export default function SignOutButton() {
  const { signOut } = useAuthActions();
  return <button onClick={() => signOut()}>Выйти</button>;
}