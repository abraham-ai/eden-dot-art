import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '../../src/util/eden'

// TYPES
import Config from '@/interfaces/Config'

interface Error {
  response: {
    data: string
  }
}

interface ApiRequest extends NextApiRequest {
  body: {
    generatorName: string
    config: Config
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { config, generatorName } = req.body
  const authToken = req.session.token

  if (!authToken) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  try {
    eden.setAuthToken(authToken)
    //const userId = req.session.userId;
    const result = await eden.startTask(generatorName, config)
    console.log(result)
    if (result.error) {
      return res.status(500).json({ error: result.error })
    } else {
      // console.log(`Starting task ${result.taskId}...`)
      return res.status(200).json({ taskId: result.taskId })
    }
  } catch (error: any) {
    if (error.response.data == 'jwt expired') {
      return res.status(401).json({ error: 'Authentication expired' })
    }
    return res.status(500).json({ error: error.response.data })
  }
}

export default withSessionRoute(handler)
