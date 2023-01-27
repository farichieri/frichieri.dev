import React from 'react';

const Filter = ({
  handleFilter,
  optionSelected,
}: {
  handleFilter: any;
  optionSelected: string;
}) => {
  const OPTIONS = [
    'All',
    'Front End',
    'Back End',
    'Full Stack',
    'freeCodeCamp',
  ];
  return (
    <section>
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          className={opt === optionSelected ? 'this-filter' : ''}
          onClick={handleFilter}
          value={opt}
        >
          {opt}
        </button>
      ))}
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        button {
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-weight: 500;
          cursor: pointer;
          color: gray;
          transition: 0.3s;
          background: none;
          border: none;
          margin: auto;
        }

        button:hover {
          box-shadow: 0 0 10px 1px var(--box-shadow);
          color: var(--textColor);
        }

        .this-filter {
          color: var(--textColor);
          box-shadow: 0 0 10px 1px var(--box-shadow);
        }
      `}</style>
    </section>
  );
};

export default Filter;
