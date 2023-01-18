import React from 'react';

export default function MainLayout({
  children,
  withPadding,
}: {
  children: React.ReactNode;
  withPadding: boolean;
}) {
  const padding = withPadding ? '3rem 1.5rem' : 0;

  return (
    <section>
      {children}
      <style jsx>
        {`
          section {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;
            margin: auto;
            max-width: 768px;
            min-height: calc(100vh - var(--navHeight));
            padding: ${padding};
            width: 100%;
          }
          @media and only screen (max-width: 500px) {
            section {
              padding: ${padding};
            }
          }
        `}
      </style>
    </section>
  );
}
