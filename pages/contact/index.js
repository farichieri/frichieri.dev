import Form from '../../components/Form/Form';

export default function Contact() {
  return (
    <section>
      <h1>Send me a message 😎</h1>
      <Form />
      <style jsx>{`
        section {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2rem;
        }
      `}</style>
    </section>
  );
}
