// middleware.ts
import {
    convexAuthNextjsMiddleware,
    createRouteMatcher,
    nextjsMiddlewareRedirect,
  } from "@convex-dev/auth/nextjs/server";
  
  const protectedRoutes = createRouteMatcher([
    "/dashboard(.*)", // пример: защищаем всё под /dashboard
  ]);
  
  export default convexAuthNextjsMiddleware(async (req, ctx) => {
    if (protectedRoutes(req) && !(await ctx.convexAuth.isAuthenticated())) {
      return nextjsMiddlewareRedirect(req, "/signin");
    }
  });
  
  export const config = {
    // по умолчанию пускаем статику, картинки и т.п.
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
  };
  