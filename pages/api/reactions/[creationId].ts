import { NextApiRequest, NextApiResponse } from 'next/types'
import { withSessionRoute } from '@/util/withSession'
import { eden } from '@/util/eden'

interface ApiRequest extends NextApiRequest {
  query: {
    creationId: string,
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { creationId } = req.query as ApiRequest["query"];
  const userId = req.session.userId;

  try {
    const creation = await eden.getCreation(creationId.toString());
    const reactions = await creation.getReactions(["🙌", "🔥"]);



    // if (creationId.toString() !== "64019e72954459017c8ed002") {
    //   console.log("GET CREATION", creationId.toString());
    //   console.log(reactions);
    // }

    const praises = reactions.filter((reaction) => reaction.reaction === "🙌");
    const burns = reactions.filter((reaction) => reaction.reaction === "🔥");



    const praised = userId && praises.some((reaction) => reaction.user._id === userId);
    const burned = userId && burns.some((reaction) => reaction.user._id === userId);
    

    console.log(userId);
    console.log("got praises", praises.length)
    console.log(praises);




    const result = {
      praises: praises.length,
      burns: burns.length,
      praised: praised,
      burned: burned,
    }

    console.log(result);
    console.log("=====")

    return res.status(200).json(result);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export default withSessionRoute(handler);
