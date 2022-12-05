import MainLayout from '../components/Layout/MainLayout';

export default function Page() {
  return (
    <MainLayout withPadding={true}>
      <div className='home'>
        <div className='home-header'>
          <p>Hi, my name is</p>
          <h1 className='name'>Fabricio Richieri</h1>
          <h1 className='build'>I build Web Apps</h1>
          <p>
            I'm a web developer focused in building beautiful, fast and
            productive pages to use in the real world.
          </p>
          <p>
            Welcome to my web page, I invite you to sail in this fast website
            made with Next.js; you can read my blog, see some of my projects,
            knwo about me and contact me
          </p>
        </div>
      </div>
      <style jsx>{`
        .home {
          height: 100%;
          width: 100%;
          padding: 5rem 0;
          font-family: var(--space_mono);
        }
        .name {
          font-size: 4rem;
          font-weight: 700;
        }
        .build {
          font-size: 2rem;
          font-weight: 400;
        }
        .home-header {
          text-align: left;
          padding: 0 5rem;
        }
      `}</style>
    </MainLayout>
  );
}
