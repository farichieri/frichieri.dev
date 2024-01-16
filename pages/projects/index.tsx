import { useState } from "react";

import { Projects, Pagination, Filter } from "@/components";
import { myProjects } from "@/utils";

const getPageSizes = (length: number): number[] => {
  if (length <= 10) {
    return [10];
  } else {
    const arr: number[] = [];
    for (let i = 10; i <= length; i += 10) {
      arr.push(i);
    }
    return arr;
  }
};

export default function Index({ projects }: { projects: Array<any> }) {
  const [projectsState, setProjectsState] = useState(myProjects);
  const [optionSelected, setOptionSelected] = useState("All");
  const PAGE_SIZES = getPageSizes(projectsState.length);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (event: Event) => {
    event.preventDefault();
    const stack = (event.target as HTMLButtonElement).value;
    const filterProjects = (stack: string) => {
      console.log({ stack });
      if (stack !== "All") {
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
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="w-full text-left">Projects</h1>
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
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const projects = myProjects;

  return {
    props: { projects },
  };
};
