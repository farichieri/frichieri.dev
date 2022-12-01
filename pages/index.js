import MainLayout from '../components/Layout/MainLayout';

export default function Page() {
  return (
    <MainLayout withPadding={true}>
      <div className='home'>
        <div className='home-header'>
          <p>Hi, my name is</p>
          <h1>Fabricio Richieri</h1>
          <h1>I build Web Apps</h1>
          <p>
            I'm a web developer focused in building beautiful, fast and
            productive pages to use in the real world.
          </p>
        </div>
      </div>
      <style jsx>{`
        .home {
          height: 100%;
          width: 100%;
          padding: 1rem; 0
          font-family: var(--space_mono);
        }
      `}</style>
    </MainLayout>
  );
}
