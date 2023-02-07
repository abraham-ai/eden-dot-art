import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  const url = request.nextUrl.clone()

  if (url.pathname == '/creation') {
    url.pathname = '/garden'
    return NextResponse.rewrite(url)
  }

  // if (url.pathname == '/profile') {
  // }

  return NextResponse.next()
}
