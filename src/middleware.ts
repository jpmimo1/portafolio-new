import { NextRequest, NextResponse } from "next/server";
import { DEFAULTLANGUAGE, LISTLANGUAGES } from "./data/language";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const getLocale = (request: NextRequest) => {
  const requestLanguage =
    request.headers.get("accept-language") || "en-US,en;q=0.5";

  const languagesNegotiator = new Negotiator({
    headers: { "accept-language": requestLanguage },
  }).languages();

  const matchLanguage = match(
    languagesNegotiator,
    LISTLANGUAGES,
    DEFAULTLANGUAGE
  ) as TLanguages;

  return matchLanguage;
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const pathNameHasLocale = LISTLANGUAGES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathNameHasLocale) return;

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|webp|gif|svg|ico|txt|xml|mp4|mp3|woff|woff2|ttf|pdf)$).*)",
  ],
};
