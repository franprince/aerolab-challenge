import React from "react";

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
    userData: null,
  });

  React.useEffect(() => {
    setData({ ...data, status: "pending" });
    getUserData()
      .then((user) =>
        setData({ ...data, userData: user, status: "fullfilled" })
      )
      .catch((error) => setData({ ...data, status: "rejected", error: error }));
  }, []);

  return (
    <userContext.Provider value={{ data, setData }}>
      {children}
    </userContext.Provider>
  );
};
