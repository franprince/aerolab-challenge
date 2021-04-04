import React from "react";

function reducer(action, payload) {
  const { type } = action;
  const { data } = payload;
  switch (type) {
    case "SORT_MOST_RECENT":
      return data;
    case "SORT_LOWEST_PRICE":
      const sortedByLowestPrice = [...data].sort((a, b) => a.cost - b.cost);
      return sortedByLowestPrice;
    case "SORT_HIGHEST_PRICE":
      const sortedByHighestPrice = [...data].sort((a, b) => b.cost - a.cost);
      return sortedByHighestPrice;
    default:
      throw Error("This action is not declared.");
  }
}

export async function getUserData() {
  try {
    const fetchUserData = await fetch(
      "https://coding-challenge-api.aerolab.co/user/me",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    const userData = await fetchUserData.json();
    return userData;
  } catch (error) {
    return error;
  }
}
export const userContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [data, setData] = React.useState({
    status: "pending",
    error: "",
    data: null,
  });
  React.useEffect(() => {
    getProducts()
      .then((user) => setData({ ...data, data: user, status: "fullfilled" }))
      .catch((error) => setData({ ...data, status: "rejected", error: error }));
  }, []);
  return (
    <userContext.Provider value={{ data, setData }}>
      {children}
    </userContext.Provider>
  );
};
