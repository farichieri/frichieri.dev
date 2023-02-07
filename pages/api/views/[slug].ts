import { NextApiRequest, NextApiResponse } from 'next';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../../utils/firebase.config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const slug = req.query.slug?.toString();
    if (!slug) {
      return;
    }
    if (req.method === 'POST') {
      let views: any[] = [];
      const viewsSnapshot = await getDocs(collection(db, 'analytics'));
      viewsSnapshot.forEach((doc) => {
        views.push(doc.data());
      });
      const findCounter = views.find((view) => view.slug === slug);
      const prevViews = findCounter?.counter ? findCounter.counter : 0;
      const newCounter = prevViews + 1;
      await setDoc(doc(db, 'analytics', slug), {
        slug: slug,
        counter: newCounter,
      });
      res.status(200).send(newCounter);
    }
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: 'error fetching views' });
  }
};
