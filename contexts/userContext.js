import * as React from "react";
import updateUserContext from "../utils/updateUserContext";

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
      throw new Error(`The action ${type} is not declared.`);
  }
}

export const userContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
  const [userData, userDispatch] = React.useReducer(userReducer, {
    status: "pending",
    error: "",
    userData: null,
  });

  React.useEffect(() => {
    updateUserContext(userDispatch);
  }, []);

  return (
    <userContext.Provider value={{ userData, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
