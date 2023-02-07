import { NextApiRequest, NextApiResponse } from 'next';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../../utils/firebase.config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const slug = req.query.slug?.toString();
    if (!slug) {
      return;
    }

    let views: any[] = [];
    const viewsSnapshot = await getDocs(collection(db, 'analytics'));
    viewsSnapshot.forEach((doc) => {
      views.push(doc.data());
    });
    const findCounter = views.find((view) => view.slug === slug);
    const actualViews = findCounter?.counter ? findCounter.counter : 0;
    const newCounter = actualViews + 1;
    if (req.method === 'POST') {
      await setDoc(doc(db, 'analytics', slug), {
        slug: slug,
        counter: newCounter,
      });
      return res.status(200).send(newCounter);
    }

    if (req.method === 'GET') {
      return res.status(200).send(actualViews);
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: 'error fetching views' });
  }
};
