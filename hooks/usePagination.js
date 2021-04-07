import React from "react";

const nextPageAvailable = (currentPage, itemsPerPage, totalItems) =>
  totalItems - currentPage * itemsPerPage > 0;
const prevPageAvailable = (currentPage) => currentPage > 1;

function calculateIndex(currentPage, itemsPerPage, totalItems, data) {
  const indexStart =
    currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const indexEnd =
    indexStart + itemsPerPage > totalItems
      ? totalItems
      : indexStart + itemsPerPage;
  const slicedArray = data && data.slice(indexStart, indexEnd);
  return {
    pageArray: slicedArray,
    indexData: {
      totalItems: totalItems,
      firstItem: indexStart,
      lastItem: indexEnd,
    },
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
    case "INITIALIZE":
      console.log(payload);
      return {
        ...state,
        ...payload,
      };
    default:
      throw Error(`The action ${type} is not valid.`);
  }
}

function usePagination(totalItems = 0, itemsPerPage = 0, itemArray) {
  const [paginationState, paginationDispatch] = React.useReducer(reducer, {
    totalItems: null,
    currentPage: 1,
    prevPageAvailable: false,
    nextPageAvailable: false,
    goToPrevPage: false,
    goTonextPage: false,
    pageArray: null,
    indexData: { totalItems: null, firstItem: null, lastItem: null },
  });

  React.useEffect(() => {
    paginationDispatch({
      type: "INITIALIZE",
      payload: {
        totalItems: totalItems,
        itemsPerPage: itemsPerPage,
        data: itemArray,
        ...calculateIndex(1, itemsPerPage, totalItems, itemArray),
      },
    });
  }, [itemArray, totalItems]);

  return [paginationState, paginationDispatch];
}

export default usePagination;
