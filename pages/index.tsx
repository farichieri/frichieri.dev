import MainLayout from '../components/Layout/MainLayout';

export default function Page() {
  return (
    <MainLayout withPadding={true}>
      <div className='home'>
        <div className='home-header'>
          <p>Hi, my name is</p>
          <h1 className='name'>Fabricio Richieri</h1>
          <h1 className='build'>I build Web Apps</h1>
          <div className='description'>
            <p>
              I&apos;m a web developer focused in building beautiful, fast and
              productive web pages.
            </p>
            <p>Welcome to my personal website!</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .home {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          width: 100%;
          max-width: 1000px;
        }
        .name {
          font-size: 4vw;
          font-weight: 700;
        }
        .build {
          font-size: 3vw;
          font-weight: 400;
        }
        .home-header {
          text-align: left;
        }
        .description {
          padding: 1rem 0;
        }
        p {
          padding: 0.25rem 0;
        }
      `}</style>
    </MainLayout>
  );
}
