import React from "react";

const nextPageAvailable = (currentPage, itemsPerPage, totalItems) =>
  Math.ceil(totalItems - currentPage * itemsPerPage > 0);
const prevPageAvailable = (currentPage) => currentPage > 1;

function init(totalItems, itemsPerPage, itemsTotal) {
  return {
    totalItems: totalItems,
    currentPage: 1,
    prevPageAvailable: false,
    nextPageAvailable: nextPageAvailable(currentPage, itemsPerPage, itemsTotal),
  };
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: currentPage + 1,
        nextPageAvailable: nextPageAvailable(
          payload.currentPage,
          payload.itemsPerPage,
          payload.totalItems
        ),
        prevPageAvailable: prevPageAvailable(payload.currentPage),
      };
    case "PREV_PAGE":
      return {
        ...state,
        currentPage: currentPage - 1,
        nextPageAvailable: nextPageAvailable(
          payload.currentPage,
          payload.itemsPerPage,
          payload.totalItems
        ),
        prevPageAvailable: prevPageAvailable(payload.currentPage),
      };
    default:
      throw Error(`The action ${type} is not valid.`);
  }
}

function usePagination(totalItems = 0, itemsPerPage = 0) {
  const [paginationState, paginationDispatch] = React.useReducer(reducer, {
    totalItems: null,
    currentPage: 1,
    prevPageAvailable: false,
    nextPageAvailable: false,
  });

  return [paginationState, paginationDispatch];
}

export default usePagination;
