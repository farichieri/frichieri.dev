import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase.config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      let allPostsViews: any[] = [];
      const viewsSnapshot = await getDocs(collection(db, 'analytics'));
      viewsSnapshot.forEach((doc) => {
        allPostsViews.push(doc.data());
      });
      return res.status(200).send(allPostsViews);
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: 'error fetching views' });
  }
};
