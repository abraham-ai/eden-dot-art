import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@/util/withSession'

// TYPES
import { NextApiRequest, NextApiResponse } from 'next/types'

import { Handler, Session } from 'next-iron-session'
import { withSessionRoute } from '@/util/withSession'
import { getIronSession } from 'iron-session/edge'

export type User = {
  isLoggedIn: boolean
  login: string
  avatarUrl: string
}

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse,
) => {
  // const session = await getIronSession(req, res, sessionOptions)
  // console.log({ req })
  // console.log(session)
  // const { userId } = session.get('user')
  // const { token } = session.get('token')
  // if (userId) {
  //   // in a real world application you might read the user id from the session and then do a database request
  //   // to get more information on the user if needed
  //   res.json({
  //     isLoggedIn: true,
  //     ...userId,
  //     ...token,
  //   })
  // } else {
  //   res.json({
  //     isLoggedIn: false,
  //     login: '',
  //     avatarUrl: '',
  //   })
  // }
}

export const getUser = withSessionRoute(handler)
