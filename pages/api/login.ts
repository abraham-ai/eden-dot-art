import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

interface ApiRequest extends NextApiRequest {
  body: {
    message: string
    signature: string
    userAddress: string
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { message, signature, userAddress } = req.body

  try {
    const result = await eden.loginEth(message, signature, userAddress)

    if (result.error) {
      return res.status(500).json({ error: result.error })
    }

    req.session.token = result.token
    req.session.userAddress = userAddress
    req.session.userId = result.userId
    req.session.username = result.username

    await req.session.save()

    eden.setAuthToken(result.token)

    res.send({ token: result.token, userId: userAddress })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Error authenticating signature' })
  }
}

export default withSessionRoute(handler)
