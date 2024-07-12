import React from 'react';
import Pagination from '@mui/material/Pagination';
import './pagination.css';

interface ListPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const ListPagination: React.FC<ListPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handleChangePage = (
    event: React.ChangeEvent<HTMLDivElement>,
    value: number
  ) => {
    onPageChange(value);
  };

  return (
    <Pagination
      className="pagination"
      count={totalPages}
      page={currentPage}
      onChange={handleChangePage}
      aria-disabled={currentPage === totalPages}
    />
  );
};
