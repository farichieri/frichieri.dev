import MainLayout from '../../components/Layout/MainLayout';
import Projects from '../../components/Projects/Projects';

export default function Index() {
  return (
    <MainLayout withPadding={true}>
      <h1 style={{ width: '100%', textAlign: 'left' }}>Projects</h1>
      <Projects featured={false} />
    </MainLayout>
  );
}
