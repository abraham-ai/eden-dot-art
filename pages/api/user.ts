import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, userId, username, userAddress } = req.session
  console.info('/api/user', req.session)
  console.info(token, userId, username, userAddress)
  if (token) {
    console.info('got a toekns')
    eden.setAuthToken(token)
  }
  console.info('returning', token, userId, username, userAddress)
  return res.status(200).send({ token, userId, username, userAddress })
}

export default withSessionRoute(handler)
