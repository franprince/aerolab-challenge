import React from "react";

const startItem = (currentPage, itemsPerPage) =>
  currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;

const nextDisabled = (startItem, itemsPerPage, totalItems) =>
  startItem + itemsPerPage >= totalItems;

const prevDisabled = (currentPage) => currentPage === 1;

const getStartItem = (startItem) => (startItem === 1 ? 1 : startItem + 1);

const getLastItem = (startItem, itemsPerPage, totalItems) =>
  startItem + itemsPerPage > totalItems ? totalItems : startItem + itemsPerPage;

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        firstItem: startItem(state.currentPage + 1, state.itemsPerPage),
        lastItem:
          startItem(state.currentPage + 1, state.itemsPerPage) +
          state.itemsPerPage,
        nextDisabled: nextDisabled(
          startItem(state.currentPage + 1, state.itemsPerPage),
          state.itemsPerPage,
          state.totalItems
        ),
        prevDisabled: prevDisabled(state.currentPage + 1),
        index: {
          indexFirst: getStartItem(
            startItem(state.currentPage + 1, state.itemsPerPage)
          ),
          indexLast: getLastItem(
            startItem(state.currentPage + 1, state.itemsPerPage),
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
        firstItem: startItem(state.currentPage - 1, state.itemsPerPage),
        lastItem:
          startItem(state.currentPage - 1, state.itemsPerPage) +
          state.itemsPerPage,
        nextDisabled: nextDisabled(
          startItem(state.currentPage - 1, state.itemsPerPage),
          state.itemsPerPage,
          state.totalItems
        ),
        prevDisabled: prevDisabled(state.currentPage - 1),
        index: {
          indexFirst: getStartItem(
            startItem(state.currentPage - 1, state.itemsPerPage)
          ),
          indexLast: getLastItem(
            startItem(state.currentPage - 1, state.itemsPerPage),
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
        firstItem: 1,
        lastItem:
          startItem(1, action.payload.itemsPerPage) +
          action.payload.itemsPerPage -
          1,
        nextDisabled: nextDisabled(
          1,
          action.payload.itemsPerPage,
          action.payload.totalItems
        ),
        prevDisabled: true,
        itemsPerPage: action.payload.itemsPerPage,
        totalItems: action.payload.totalItems,
        index: {
          indexFirst: getStartItem(startItem(1, action.payload.itemsPerPage)),
          indexLast: getLastItem(
            startItem(1, action.payload.itemsPerPage),
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
