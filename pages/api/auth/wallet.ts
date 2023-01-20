// NEXT
import { NextApiRequest, NextApiResponse } from 'next/types'

// FETCH
import axios from 'axios'

// SESSION
import { withSessionRoute } from '../../../src/util/withSession'

interface ApiRequest extends NextApiRequest {
  body: {
    message: string
    signature: string
    userAddress: string
  }
}

// console.log("HANDLER")
// console.log(process.env.GATEWAY_URL)

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { message, signature, userAddress } = req.body
    const GATEWAY_URL = process.env.GATEWAY_URL as string

    // console.log(GATEWAY_URL)

  try {
    const gatewayRes = await axios.post(`${GATEWAY_URL}/sign_in`, {
      message,
      signature,
      userId: userAddress,
      userType: 'ethereum',
    })

      // console.log(gatewayRes)

    const { authToken } = gatewayRes.data
      req.session.token = authToken
      req.session.userId = userAddress
    await req.session.save()

    res.send({ message: 'Successfully authenticated key pair' })
  } catch (error: any) {
      console.error(error)
      // console.log(error)
    res.status(500).json({ error: 'Error authenticating key pair' })
  }
}

export default withSessionRoute(handler)
