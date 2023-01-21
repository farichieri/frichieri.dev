import MainLayout from '../../components/Layout/MainLayout';
import Projects from '../../components/Projects/Projects';

export default function Index() {
  return (
    <MainLayout withPadding={false}>
      <Projects featured={false} />
      <style jsx>
        {`
          section {
            width: 100%;
            height: 100%;
            display: flex;
          }
        `}
      </style>
    </MainLayout>
  );
}
