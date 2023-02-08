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
    const token = await eden.loginEth(message, signature, userAddress)

    req.session.token = token
    req.session.userId = userAddress
    await req.session.save()

    res.send({ message: 'Successfully authenticated key pair' })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Error authenticating key pair' })
  }
}

export default withSessionRoute(handler)