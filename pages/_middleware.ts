import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (url.pathname == '/') {
    url.pathname = '/creations'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}
