import getUserData from "./getUserData";

function updateUserContext(userDispatch) {
  userDispatch({
    payload: { status: "pending" },
    type: "GET_USER",
  });
  getUserData()
    .then((response) => {
      if (response.ok) {
        userDispatch({
          payload: { ...response },
          type: "GET_USER_SUCCESS",
        });
      } else {
        userDispatch({
          payload: { ...response },
          type: "GET_USER_FAIL",
        });
      }
    })
    .catch((error) => console.error(error));
}

export default updateUserContext;
