import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '../../src/util/eden'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authToken = req.session.token

  if (!authToken) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  try {
    eden.setAuthToken(authToken)
    const newApiKey = await eden.createNewApiKey()
    return res.status(200).json(newApiKey)
  } catch (error: any) {
    if (error.response.data == 'jwt expired') {
      return res.status(401).json({ error: 'Authentication expired' })
    }
    return res.status(500).json({ error: error.response.data })
  }
}

export default withSessionRoute(handler)
