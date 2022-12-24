import React from 'react';

export default function MainLayout({
  children,
  withPadding,
}: {
  children: React.ReactNode;
  withPadding: boolean;
}) {
  const padding = withPadding ? '1.5rem' : 0;

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
            justify-content: center;
            margin: auto;
            max-width: 768px;
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
