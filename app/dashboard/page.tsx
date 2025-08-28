// app/dashboard/page.tsx
import { isAuthenticatedNextjs } from "@convex-dev/auth/nextjs/server";

export default async function Dashboard() {
  const ok = await isAuthenticatedNextjs();
  // (обычно редиректим через middleware; здесь просто пример)
  if (!ok) return <main style={{ padding: 24 }}>Not authorized</main>;

  return <main style={{ padding: 24 }}>Секретный дашборд 💼</main>;
}
