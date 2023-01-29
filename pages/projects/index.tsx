import Filter from '../../components/Filter/Filter';
import MainLayout from '../../components/Layout/MainLayout';
import Projects from '../../components/Projects/Projects';
import { myProjects } from '../../utils/myProjects';
import { useState } from 'react';

export default function Index() {
  const [projectsState, setProjectsState] = useState(myProjects);
  const [optionSelected, setOptionSelected] = useState('All');

  const handleFilter = (event: Event) => {
    event.preventDefault();
    const stack = (event.target as HTMLButtonElement).value;
    const filterProjects = (stack: string) => {
      if (stack !== 'All') {
        return myProjects.filter((project) => project.stack.includes(stack));
      } else {
        return myProjects;
      }
    };
    setOptionSelected(stack);
    setProjectsState(filterProjects(stack));
  };

  return (
    <MainLayout withPadding={true}>
      <h1 style={{ width: '100%', textAlign: 'left' }}>Projects</h1>
      <Filter handleFilter={handleFilter} optionSelected={optionSelected} />
      <Projects projects={projectsState} featured={false} />
    </MainLayout>
  );
}

// Should implement getStaticProps for projects
