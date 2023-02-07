import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Views = () => {
  const router = useRouter();
  const [views, setViews] = useState<any>(0);

  useEffect(() => {
    const getView = async () => {
      const envMethod = process.env.NODE_ENV === 'production' ? 'POST' : 'GET';
      fetch(`/api/views/${router.query.id}`, {
        method: envMethod,
      })
        .then((res) => res.json())
        .then(setViews);
    };
    getView();
  }, []);

  return (
    <div>
      {views > 0 && <>views: {views}</>}
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          font-size: 80%;
          color: gray;
          justify-content: flex-end;
          font-style: italic;
          margin-left: auto;
        }
      `}</style>
    </div>
  );
};

export default Views;
