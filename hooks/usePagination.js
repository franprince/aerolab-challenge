import * as React from "react";

const firstItem = (currentPage, itemsPerPage) =>
  currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;

const lastItem = (currentPage, itemsPerPage) =>
  firstItem(currentPage, itemsPerPage) + itemsPerPage;

const nextDisabled = (itemsPerPage, totalItems, currentPage) =>
  firstItem(currentPage, itemsPerPage) + itemsPerPage >= totalItems;

const prevDisabled = (currentPage) => currentPage === 1;

const indexFirstItem = (currentPage, itemsPerPage) =>
  firstItem(currentPage, itemsPerPage) === 1
    ? 1
    : firstItem(currentPage, itemsPerPage) + 1;

const indexLastItem = (currentPage, itemsPerPage, totalItems) =>
  firstItem(currentPage, itemsPerPage) + itemsPerPage > totalItems
    ? totalItems
    : firstItem(currentPage, itemsPerPage) + itemsPerPage;

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        firstItem: firstItem(state.currentPage + 1, state.itemsPerPage),
        lastItem: lastItem(state.currentPage + 1, state.itemsPerPage),
        nextDisabled: nextDisabled(
          state.itemsPerPage,
          state.totalItems,
          state.currentPage + 1
        ),
        prevDisabled: prevDisabled(state.currentPage + 1),
        index: {
          indexFirst: indexFirstItem(state.currentPage + 1, state.itemsPerPage),
          indexLast: indexLastItem(
            state.currentPage + 1,
            state.itemsPerPage,
            state.totalItems
          ),
          indexTotal: state.totalItems,
        },
      };
    case "PREV_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
        firstItem: firstItem(state.currentPage - 1, state.itemsPerPage),
        lastItem: lastItem(state.currentPage - 1, state.itemsPerPage),
        nextDisabled: nextDisabled(
          state.itemsPerPage,
          state.totalItems,
          state.currentPage - 1
        ),
        prevDisabled: prevDisabled(state.currentPage - 1),
        index: {
          indexFirst: indexFirstItem(state.currentPage - 1, state.itemsPerPage),
          indexLast: indexLastItem(
            state.currentPage - 1,
            state.itemsPerPage,
            state.totalItems
          ),
          indexTotal: state.totalItems,
        },
      };
    case "INITIALIZE":
      return {
        ...state,
        currentPage: 1,
        firstItem: 0,
        lastItem: lastItem(1, action.payload.itemsPerPage),
        nextDisabled: nextDisabled(
          action.payload.itemsPerPage,
          action.payload.totalItems,
          1
        ),
        prevDisabled: true,
        itemsPerPage: action.payload.itemsPerPage,
        totalItems: action.payload.totalItems,
        index: {
          indexFirst: indexFirstItem(1, action.payload.itemsPerPage),
          indexLast: indexLastItem(
            1,
            action.payload.itemsPerPage,
            action.payload.totalItems
          ),
          indexTotal: action.payload.totalItems,
        },
      };
    default:
      throw new Error(`The action ${action.type} is not declared.`);
  }
}

function usePagination(itemsPerPage, totalItems) {
  const [paginationState, paginationDispatch] = React.useReducer(reducer, {
    currentPage: 1,
    firstItem: null,
    lastItem: null,
    nextDisabled: false,
    prevDisabled: false,
    itemsPerPage: null,
    totalItems: null,
    index: {
      indexFirst: 0,
      indexLast: 0,
      indexTotal: 0,
    },
  });
  React.useEffect(() => {
    paginationDispatch({
      type: "INITIALIZE",
      payload: { itemsPerPage: itemsPerPage, totalItems: totalItems },
    });
  }, [itemsPerPage, totalItems]);
  return {
    paginationState,
    paginationDispatch,
  };
}

export default usePagination;
