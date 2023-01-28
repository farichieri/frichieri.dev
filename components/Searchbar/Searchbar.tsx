import React from 'react';

const Searchbar = ({ handleSearch }: { handleSearch: any }) => {
  return (
    <>
      <input placeholder='Search posts' onChange={handleSearch} />
      <style jsx>{`
        input {
          background: none;
          border: none;
          border-bottom: 1px solid gray;
          width: 100%;
          margin: 2rem 0 0 0;
          outline: none;
          color: var(--textColor);
          padding: 0.1rem 0;
          border: 1px solid var(--textColor);
          border-radius: 5px;
          padding: 0.4rem 0.4rem 0.4rem 0.4rem;
        }
      `}</style>
    </>
  );
};

export default Searchbar;
