// UTILS
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

// TYPES
import { NextApiRequest, NextApiResponse } from 'next/types'
// import { Handler, Session } from 'next-iron-session'

interface ApiRequest extends NextApiRequest {
  body: {
    creatorId: string
    generators: string[]
    earliestTime: number
    latestTime: number
    limit: number
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { creatorId, generators, earliestTime, latestTime, limit } = req.body

  const { session } = req

  // console.log('CREATION ROUTE')
  // console.log(session)

  const { token } = session

  try {
    if (token) {
      eden.setAuthToken(token)
    }

    const filter = {}
    Object.assign(filter, creatorId ? { creatorId: creatorId } : {})
    Object.assign(filter, generators ? { generators: generators } : {})
    Object.assign(filter, earliestTime ? { earliestTime: earliestTime } : {})
    Object.assign(filter, latestTime ? { latestTime: latestTime } : {})
    Object.assign(filter, limit ? { limit: limit } : {})

    const creations = await eden.getCreations(filter)

    return res.status(200).json({ creations: creations, session })
  } catch (error: any) {
    if (error.response.data == 'jwt expired') {
      return res.status(401).json({ error: 'Authentication expired' })
    }
    return res.status(500).json({ error: error.response.data })
  }
}

export default withSessionRoute(handler)
