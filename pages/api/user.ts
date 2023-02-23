import { withSessionRoute } from '@/util/withSession'
import { NextApiRequest, NextApiResponse } from 'next/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('USER ROUTE')
  console.log(req.session)

  const { token, userId } = req.session

  if (
    typeof token === 'string' &&
    token.length > 0 &&
    typeof userId === 'string' &&
    userId.length > 0
  ) {
    res.send({
      message: 'Session Cookie Found',
      userId,
      token,
    })
  } else {
    res.send({
      message: 'No Session Cookie Found',
    })
  }

  //   try {
  //     const resp = await eden.loginEth(message, signature, userAddress)

  //     console.log(resp)

  //     req.session.token = resp.token
  //     req.session.userId = userAddress

  //     const token = resp.token

  //     await req.session.save()

  //     res.send({
  //       message: 'Successfully authenticated key pair',
  //       token,
  //     })
  //   } catch (error: any) {
  //     console.error(error)
  //     res.status(500).json({ error: 'Error authenticating key pair' })
  //   }
}

export default withSessionRoute(handler)
