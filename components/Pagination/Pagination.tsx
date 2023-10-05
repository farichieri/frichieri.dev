import React from 'react';
import usePagination, { DOTS } from '../../hooks/usePagination';

const Pagination = ({
  currentPage,
  totalCount,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeOptionChange,
  totalPages,
}: {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageChange: any;
  onPageSizeOptionChange: Function;
  totalPages: number;
}) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    totalPages,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className='flex select-none gap-1 items-baseline list-none mb-20 justify-center'>
      <li className=' flex'>
        <button
          type='button'
          className='arrowButton left border border-box-shadow-light bg-transparent h-9 w-9 rounded-full overflow-hidden hover:bg-slate-500/20 disabled:opacity-50 disabled:pointer-events-none'
          aria-label='Goto previous page'
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          {`<`}
        </button>
      </li>

      {paginationRange.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className='dots line-height-34px mx-2'>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={` ${
              pageNumber === currentPage
                ? 'font-bold underline opacity-100 bg-slate-500/20 rounded-full '
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <button
              type='button'
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
              className='border border-box-shadow-light bg-transparent h-9 w-9 rounded-full overflow-hidden  hover:bg-slate-500/20'
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className=' flex'>
        <button
          type='button'
          className='arrowButton right border border-box-shadow-light bg-transparent h-9 w-9 rounded-full overflow-hidden hover:bg-slate-500/20 disabled:opacity-50 disabled:pointer-events-none'
          aria-label='Goto next page'
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          {`>`}
        </button>
      </li>

      <select
        className='bg-[var(--bgColor)] mx-2 px-2 py-2 text-[var(--textColor)] border border-box-shadow-light rounded-md'
        aria-label='Select page size'
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(e.target.value);
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </ul>
  );
};

export default Pagination;
