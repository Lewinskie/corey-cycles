import React from "react";
import { Pagination, Stack, PaginationItem } from "@mui/material";

const Paginations = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const pages = Math.ceil(props.totalItems / props.itemsPerPage);

  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        onChange={(event, number) => props.handleClick(number)}
      >
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>{number}</PaginationItem>
        ))}
      </Pagination>
    </Stack>
  );
};

export default Paginations;
