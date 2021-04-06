import React from "react";
import getProducts from "../utils/getProducts";

function productReducer(state, action) {
  const { type, payload } = action;
  const { defaultData } = state;
  switch (type) {
    case "SORT_MOST_RECENT":
      return { ...state, sortedBy: "mostRecent", sortedData: defaultData };
    case "SORT_LOWEST_PRICE":
      const sortedByLowestPrice = [...defaultData].sort(
        (a, b) => a.cost - b.cost
      );
      return {
        ...state,
        sortedBy: "lowestPrice",
        sortedData: sortedByLowestPrice,
      };
    case "SORT_HIGHEST_PRICE":
      const sortedByHighestPrice = [...defaultData].sort(
        (a, b) => b.cost - a.cost
      );
      return {
        ...state,
        sortedBy: "highestPrice",
        sortedData: sortedByHighestPrice,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        ...payload,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        ...payload,
      };
    case "GET_PRODUCTS_FAIL":
      return {
        ...state,
        ...payload,
      };
    default:
      throw Error(`The action ${type} is not declared.`);
  }
}

export const productContext = React.createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(productReducer, {
    status: null,
    error: "",
    defaultData: null,
    sortedData: null,
    sortedBy: null,
  });
  React.useEffect(() => {
    dispatch({
      payload: { status: "pending" },
      type: "GET_PRODUCTS",
    });
    getProducts()
      .then((response) =>
        dispatch({
          payload: { ...response },
          type: "GET_PRODUCTS_SUCCESS",
        })
      )
      .catch((error) =>
        dispatch({
          payload: { ...error },
          type: "GET_PRODUCTS_FAIL",
        })
      );
  }, []);
  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};
