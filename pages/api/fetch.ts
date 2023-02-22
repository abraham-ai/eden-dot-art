import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '../../src/util/eden'

interface ApiRequest extends NextApiRequest {
  body: {
    taskId: string;
  };
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  // const { taskId } = req.body;
  const authToken = req.session.token;

  if (!authToken) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    eden.setAuthToken(authToken.token);
    const result = await eden.getTasks(["running", "pending"]);
    if (result.error) {
      // console.log("result.error found")
      // console.log(result.error)
      return res.status(500).json({ error: result.error });
    } 
    
    return res.status(200).json(result);
    
  } catch (error: any) {
    // console.log(error)
    // console.log("FETCH CAUGHT AN ERORR")
    // console.log(error)
    return res.status(500).json({ error: error.response.data });
  }
};

export default withSessionRoute(handler);
