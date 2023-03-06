import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

interface ApiRequest extends NextApiRequest {
  query: {
    creationId: string
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { creationId } = req.query as ApiRequest['query']
  const userId = req.session.userId

  try {
    const creation = await eden.getCreation(creationId.toString())

    const reactions = await creation.getReactions(['🙌', '🔥'])

    const praises = reactions?.filter(reaction => reaction.reaction === '🙌')
    const burns = reactions?.filter(reaction => reaction.reaction === '🔥')

    const praised =
      userId && praises?.some(reaction => reaction.user._id === userId)
    const burned =
      userId && burns?.some(reaction => reaction.user._id === userId)

    const result = {
      praises: praises ? praises.length : 0,
      burns: burns ? burns.length : 0,
      praised: praised,
      burned: burned,
    }

    return res.status(200).json(result)
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}

export default withSessionRoute(handler)
