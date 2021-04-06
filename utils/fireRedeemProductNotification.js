import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import getUserData from "./getUserData";
import redeemProducts from "./redeemProduct";

function fireRedeemProductNotification(props, productId, userDispatch) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: "",
    text: "",
    imageUrl: "",
    imageWidth: 252,
    imageHeight: 182,
    imageAlt: "",
    showCancelButton: true,
    cancelButtonColor: "#dc3545",
    confirmButtonColor: "#28a745",
    confirmButtonText: "Redeem",
    ...props,
  }).then((result) => {
    if (result.isConfirmed) {
      redeemProducts(productId)
        .then((response) => {
          if (!response.error) {
            const message =
              response.message === "You've redeem the product successfully"
                ? "You have redeemed the product successfully"
                : response.message;
            MySwal.fire("Congratulations!", message, "success");
          } else {
            const message =
              response.error === "User don't have enogh points"
                ? "You don't have enough points"
                : response.error;
            MySwal.fire("OOPS!", message, "error");
          }
        })
        .catch((error) => console.error(error))
        .finally(() =>
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
            )
        );
    } else {
      return;
    }
  });
}

export default fireRedeemProductNotification;
