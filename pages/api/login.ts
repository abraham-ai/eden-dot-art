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
  console.info('message', message)
  console.info('signature', signature)
  console.info('userAddress', userAddress)

  try {
    console.info('log eth', message, signature, userAddress)
    const result = await eden.loginEth(message, signature, userAddress)

    console.info('log eth result', result)

    if (result.error) {
      console.info(result.error)
      return res.status(500).json({ error: result.error })
    }

    req.session.token = result.token
    req.session.userAddress = userAddress
    req.session.userId = result.userId
    req.session.username = result.username

    console.info('log eth session', req.session)

    await req.session.save()

    eden.setAuthToken(result.token)

    res.send({ token: result.token, userId: userAddress })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Error authenticating signature' })
  }
}

export default withSessionRoute(handler)
