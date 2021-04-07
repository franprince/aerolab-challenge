import getUserData from "./getUserData";

function updateUserContext(userDispatch) {
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
}

export default updateUserContext;
