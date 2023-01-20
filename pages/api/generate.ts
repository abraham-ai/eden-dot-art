// NEXT
import type { NextApiRequest, NextApiResponse } from 'next/types'

// UTILS
import { getGatewayResult } from '../../src/util/eden'

// TYPES
import { AuthMode } from '../../src/models/types'

// SESSION
import { withSessionRoute } from '@/util/withSession'

interface ApiRequest extends NextApiRequest {
  body: {
    prompt: string
    width: number
    height: number
    authMode: AuthMode
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { prompt, width, height } = req.body;
  const authToken = req.session.token;

  const config = {
    generatorName: "create",
    requestConfig: {
      text_input: prompt,
      width,
      height,
    },
  };

  if (!authToken) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const result = await getGatewayResult(config, authToken);

    return res.status(200).json({ outputUrl: result.outputUrl });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.response.data });
  }
};

export default withSessionRoute(handler);
