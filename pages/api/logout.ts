import { withIronSessionApiRoute } from 'iron-session/next'

// TYPES
import { NextApiRequest, NextApiResponse } from 'next/types'
// import type { User } from 'pages/api/user'

// SESSION
// import { withSessionRoute } from '@/util/withSession'

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log({ req })

//   try {
//     req.session.destroy()
//     res.setHeader(
//       'Set-Cookie',
//       `ironSession=${''}; Path=/; HttpOnly; Expires=${new Date().toUTCString()}`,
//     )
//     res.status(200).json({ success: true })
//   } catch (error: any) {
//     console.log(error)
//   }
// }

// export default withSessionRoute(handler, {
//   cookieName: 'eden_art',
//   password: process.env.COOKIE_SECRET,
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production',
//   },
// })

// import { withIronSessionApiRoute } from 'iron-session/next'

// import type { User } from 'pages/api/user'

// export default withIronSessionApiRoute(logoutRoute, withSessionRoute)

// function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
//   req.session.destroy()
//   res.json({ isLoggedIn: false, login: '', avatarUrl: '' })
// }

// import { NextApiRequest, NextApiResponse } from "next";
// import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.session)

    req.session.destroy()
    console.log('req', { req })
    console.log(req.session)

    res.setHeader(
      'Set-Cookie',
      `ironSession=${''}; Path=/; HttpOnly; Expires=${new Date().toUTCString()}`,
    )
    res.status(200).json({ success: true })
  },
  {
    cookieName: 'eden_art',
    password: process.env.COOKIE_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  null,
  { maxAge: 0 }, // set max age to 0 to expire the cookie immediately
)
