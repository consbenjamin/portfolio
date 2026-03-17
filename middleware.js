import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const maybeLocale = pathname.split("/")[1];
  const locale = maybeLocale === "es" || maybeLocale === "en" ? maybeLocale : null;

  const response = NextResponse.next();
  if (locale) {
    response.cookies.set("locale", locale, {
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/|.*\\..*).*)"],
};

