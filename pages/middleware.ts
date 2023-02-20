import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// IRON-SESSION
import { getIronSession } from 'iron-session/edge'
import { sessionOptions } from '@/util/withSession'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const session = await getIronSession(req, res, sessionOptions)

  const { userId } = session.get('user')
  const { token } = session.get('token')

  console.log('from middleware', { userId, token })

  // demo:
  if (userId !== '0x49fbd13846F2428c148A4c165a22b4fFA54263a4') {
    return new NextResponse(null, { status: 403 }) // unauthorized to see pages inside admin/
  }

  const url = req.nextUrl.clone()

  if (url.pathname == '/creation') {
    url.pathname = '/garden'
    return NextResponse.rewrite(url)
  }

  // if (url.pathname == '/profile') {
  // }

  return NextResponse.next()
}
