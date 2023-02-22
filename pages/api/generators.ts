import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '../../src/util/eden'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const generatorName = req.query.name as string
    if (generatorName) {
      const generatorVersion = await eden.getGenerator(generatorName)
      return res.status(200).json({ generatorVersion: generatorVersion })
    } else {
      return res.status(400).json({ error: 'Missing generator name' })
    }
  } catch (error: any) {
    // console.log("ERROR!!!" )
    // console.log(error)
    // console.log(error.response)
    // console.log(error.response.data)
    return res.status(500).json({ error: error.response.data })
  }
}

export default withSessionRoute(handler)
