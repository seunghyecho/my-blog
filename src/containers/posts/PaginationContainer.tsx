import React from 'react';
import Pagination from 'components/posts/Pagination';

function PaginationContainer({ page, setPage,lastPage }) {
  return (
    <Pagination
      page={page}
      setPage={setPage}
      lastPage={lastPage}
    />
  );
}

export default PaginationContainer;
