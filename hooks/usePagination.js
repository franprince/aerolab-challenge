import React from "react";

function reducer(state, action) {}

function usePagination({ data = [], initialItemsPerPage = 0 }) {
  const [itemsPerPage, setItemsPerPage] = React.useState(initialItemsPerPage);
  const [pageData, setPageData] = React.useState(() =>
    data.slice(itemsPerPage)
  );
  const [state, dispatch] = React.useReducer(reducer, { data: data });
  return {
    data: pageData,
    totalItems: data.length,
  };
}

export default usePagination;
