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
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: ${padding};
            margin: auto;
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
