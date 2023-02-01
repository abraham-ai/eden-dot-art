import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '../../src/util/eden'

interface ApiRequest extends NextApiRequest {
  body: {
    creatorId: string
    earliestTime: number
    latestTime: number
    limit: number
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const authToken = req.session.token

  if (!authToken) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  try {
    eden.setAuthToken(authToken)
    //const userId = req.session.userId;

    return res.status(200).json({ tbd: 'TBD' })
  } catch (error: any) {
    if (error.response.data == 'jwt expired') {
      return res.status(401).json({ error: 'Authentication expired' })
    }
    return res.status(500).json({ error: error.response.data })
  }
}

export default withSessionRoute(handler)
