import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Views = () => {
  const [views, setViews] = useState<any>(0);

  const router = useRouter();
  useEffect(() => {
    const getView = async () => {
      fetch(`/api/views/${router.query.id}`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then(setViews);
    };
    getView();
  }, [router]);

  return (
    <div>
      {views > 0 && <>Views: {views}</>}
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Views;
