import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./actions/user-action";
import { UserRoles } from "./common/constants";

export const middleware = async (request: NextRequest) => {
  const currentUser = await getCurrentUser();
  const pathname = request.nextUrl.pathname;

  if (currentUser) {
    // TODO: update the middleware with other paths and roles
    if (
      pathname.startsWith("/sign-in") ||
      (pathname.startsWith("/users") &&
        (currentUser.role === UserRoles.ADMIN ||
          currentUser.role === UserRoles.PARTICIPANT))
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  } else if (
    pathname === "/" ||
    pathname.startsWith("/marking") ||
    pathname.startsWith("/ranking") ||
    pathname.startsWith("/sign-in")
  ) {
    return NextResponse.next();
  } else {
    return forceSignIn(request);
  }
};

const forceSignIn = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/sign-in", request.url));
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
