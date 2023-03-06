import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

interface ApiRequest extends NextApiRequest {
  body: {
    earliestTime: number
    status: string[]
    limit: number
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { earliestTime, limit, status } = req.body
  const authToken = req.session.token

  if (!authToken) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  try {
    const filter = {
      earliestTime: earliestTime,
      status: status,
      limit: limit,
    }

    const result = await eden.getTasks(filter)
    // console.log(result);

    if (result.error) {
      // console.log(result.error)
      return res.status(500).json({ error: result.error })
    } else {
      // result.tasks.forEach(async (task) => {
      //   if (task && task.creation) {
      //     const creation = await eden.getCreation(result.task.creation);
      //     Object.assign(task, { creation: creation });
      //   };
      // });
      return res.status(200).json(result)
    }
  } catch (error: any) {
    // console.log(error)
    return res.status(500).json(error)
  }
}

export default withSessionRoute(handler)
