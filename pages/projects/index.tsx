import { myProjects } from '../../utils/myProjects';
import { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import MainLayout from '../../components/Layout/MainLayout';
import Pagination from '../../components/Pagination/Pagination';
import Projects from '../../components/Projects/Projects';

const PAGE_SIZES = [6, 12, 18, 24, 32];

export default function Index({ projects }: { projects: Array<any> }) {
  const [projectsState, setProjectsState] = useState(myProjects);
  const [optionSelected, setOptionSelected] = useState('All');
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (event: Event) => {
    event.preventDefault();
    const stack = (event.target as HTMLButtonElement).value;
    const filterProjects = (stack: string) => {
      if (stack !== 'All') {
        return projects.filter((project) => project.stack.includes(stack));
      } else {
        return projects;
      }
    };
    setOptionSelected(stack);
    setProjectsState(filterProjects(stack));
    setCurrentPage(1);
  };

  const totalCount = projectsState.length;
  const blogsFrom = (currentPage - 1) * rowsPerPage;
  const blogsTo = currentPage * rowsPerPage;
  const currentPaginationData = projectsState.slice(blogsFrom, blogsTo);
  const totalPages = Math.ceil(totalCount / rowsPerPage);

  const updatePage = (event: number) => {
    setCurrentPage(Number(event));
  };

  const updateRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event));
    updatePage(1);
  };

  return (
    <MainLayout withPadding={true}>
      <h1 style={{ width: '100%', textAlign: 'left' }}>Projects</h1>
      <Filter handleFilter={handleFilter} optionSelected={optionSelected} />
      <Projects projects={currentPaginationData} featured={false} />
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
        totalPages={totalPages}
      />
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const projects = myProjects;

  return {
    props: { projects },
  };
};
