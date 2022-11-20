export default function MainLayout({ children, withPadding }) {
  const padding = withPadding ? '1rem' : 0;

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
