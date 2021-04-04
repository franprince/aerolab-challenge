import React from "react";

function productReducer(state, action) {
  const { type } = action;
  const { defaultData } = state;
  switch (type) {
    case "SORT_MOST_RECENT":
      return { ...state, sortedBy: "mostRecent", sortedData: defaultData };
    case "SORT_LOWEST_PRICE":
      const sortedByLowestPrice = [...defaultData].sort(
        (a, b) => a.cost - b.cost
      );
      console.log(sortedByLowestPrice);
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
    case "UPDATED_DATA":
      return { ...action.payload };
    case "ERROR_FETCHING":
      return { ...action.payload };
    default:
      throw Error("This action is not declared.");
  }
}

export async function getProducts() {
  try {
    const fetchProducts = await fetch(
      "https://coding-challenge-api.aerolab.co/products",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const products = await fetchProducts.json();
    return products;
  } catch (error) {
    return error;
  }
}

export const productContext = React.createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(productReducer, {
    status: "pending",
    error: "",
    defaultData: null,
    sortedData: null,
    sortedBy: "mostRecent",
  });
  React.useEffect(() => {
    getProducts()
      .then((products) =>
        dispatch({
          type: "UPDATED_DATA",
          payload: {
            ...state,
            sortedData: products,
            defaultData: products,
            status: "fullfilled",
          },
        })
      )
      .catch((error) =>
        dispatch({
          type: "ERROR_FETCHING",
          payload: { ...state, status: "rejected", error: error },
        })
      );
  }, []);
  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};
