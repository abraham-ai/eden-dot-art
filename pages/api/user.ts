import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, userId, username, userAddress } = req.session
  if (token) {
    eden.setAuthToken(token)
  }
  return res.status(200).send({ token, userId, username, userAddress })
}

export default withSessionRoute(handler)
