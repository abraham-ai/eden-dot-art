// import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware() {

  // propTypes request: NextRequest
  // const url = request.nextUrl.clone()

  // if (url.pathname == '/') {
  //   url.pathname = '/creations'
  //   return NextResponse.rewrite(url)
  // }

  // if (url.pathname == '/profile' && req.session.token) {

  // }

  return NextResponse.next()
}
