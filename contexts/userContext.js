import React from "react";
import getUserData from "../utils/getUserData";

function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_USER":
      return {
        ...state,
        ...payload,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        ...payload,
      };
    case "GET_USER_FAIL":
      return {
        ...state,
        ...payload,
      };
    default:
      throw Error(`The action ${type} is not declared.`);
  }
}

export const userContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userData, userDispatch] = React.useReducer(userReducer, {
    status: "pending",
    error: "",
    userData: null,
  });

  React.useEffect(() => {
    userDispatch({
      payload: { status: "pending" },
      type: "GET_USER",
    });
    getUserData()
      .then((response) =>
        userDispatch({
          payload: { ...response },
          type: "GET_USER_SUCCESS",
        })
      )
      .catch((error) =>
        userDispatch({
          payload: { ...error },
          type: "GET_USER_FAIL",
        })
      );
  }, []);

  return (
    <userContext.Provider value={{ userData, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
