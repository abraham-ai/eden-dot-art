import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

// FETCH
import { AxiosError } from 'axios'

// TYPES
import { NextApiRequest, NextApiResponse } from 'next/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authToken = req.session.token

  if (!authToken) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  try {
    eden.setAuthToken(authToken)
    const manna = await eden.getManna()
    return res.status(200).json({ balance: manna })
  } catch (error: any) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      console.error(error)
    }
    return res.status(500).json({ error: error.response.data })
  }
}

export default withSessionRoute(handler)
