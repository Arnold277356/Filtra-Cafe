import { NextResponse } from 'next/server'

export function middleware() {
  // This stops the automatic bouncing
  return NextResponse.next()
}

export const config = {
  matcher: ['/staff/:path*', '/staff-login'],
}