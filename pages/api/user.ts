import { withSessionRoute } from '@/util/withSession'
import { NextApiRequest, NextApiResponse } from 'next/types'

interface Session {
  token?: string
  userId?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //   console.log('USER ROUTE')
  //   console.log(req.session)

  const { token, userId }: Session = req.session

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
}

export default withSessionRoute(handler)
