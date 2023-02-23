import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
  // console.log('from middleware', { userId, token })
  // demo:
  // if (userId !== '0x49fbd13846F2428c148A4c165a22b4fFA54263a4') {
  //   return new NextResponse(null, { status: 403 }) // unauthorized to see pages inside admin/
  // }

  const url = req.nextUrl.clone()

  if (url.pathname == '/creation') {
    url.pathname = '/garden'
    return NextResponse.rewrite(url)
  }

  // if (url.pathname == '/profile') {
  // }

  return NextResponse.next()
}
