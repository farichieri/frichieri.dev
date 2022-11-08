import Image from 'next/image';

export default function About() {
  return (
    <section>
      <div>
        <span className='img--container'>
          <Image src={'/images/frichieri.jpg'} alt='Fabricio Richieri' fill />
        </span>
        <h1>I am a Web Developer,</h1>
        <h4>based in Buenos Aires, Argentina</h4>
      </div>
      <style jsx>{`
        section {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 2rem;
        }
        div {
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .img--container {
          height: 150px;
          width: 150px;
          display: flex;
          position: relative;
          border-radius: 50%;
          overflow: auto;
        }
      `}</style>
    </section>
  );
}
