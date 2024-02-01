import React from "react";

import usePagination, { DOTS } from "../hooks/usePagination";
import { ArrowLeft, ArrowRight } from "react-feather";

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
    <ul className="mb-20 flex select-none list-none items-baseline justify-center gap-1">
      <li className=" flex">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-transparent hover:bg-slate-500/20 disabled:pointer-events-none disabled:opacity-50"
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      </li>

      {paginationRange.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="dots line-height-34px mx-2">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={` ${
              pageNumber === currentPage
                ? "rounded-full bg-slate-500/20 font-bold underline opacity-100 "
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <button
              type="button"
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
              className="h-9 w-9 overflow-hidden rounded-full border bg-transparent  hover:bg-slate-500/20"
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className=" flex">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-transparent hover:bg-slate-500/20 disabled:pointer-events-none disabled:opacity-50"
          aria-label="Goto next page"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </li>

      <select
        className="mx-2 rounded-md border bg-[var(--bgColor)] px-2 py-2 text-[var(--textColor)]"
        aria-label="Select page size"
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
