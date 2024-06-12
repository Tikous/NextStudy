import { NextRequest, NextResponse } from "next/server";
// This will automatically redirect to login page
// export { default } from 'next-auth/middleware'


// middleware will be excuted before every api request
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/new-page', request.url))
}

export const config = {
  // In this example, middleware will only be excuted when route is /users
  /**
   * *: zero or more
   * +: one or more
   * ?: zero or one
   */
  matcher: ['/middleware/:id*']
}