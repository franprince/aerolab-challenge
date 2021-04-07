import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import addPoints from "./addPoints";
import updateUserContext from "./updateUserContext";

function fireAddPointsNotification(props, amount, userDispatch) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: "",
    text: "",
    showCancelButton: true,
    cancelButtonColor: "#dc3545",
    confirmButtonColor: "#28a745",
    confirmButtonText: "Add",
    ...props,
  }).then((result) => {
    if (result.isConfirmed) {
      debugger;
      addPoints(amount)
        .then((response) => {
          if (!response.error) {
            const message =
              response.message === "Points Updated"
                ? `${amount} points were added to your wallet`
                : response.message;
            MySwal.fire("Awesome!", message, "success");
          } else {
            const message =
              response.error === "Enter a Valid Amount."
                ? "You tried to add an invalid amount"
                : response.error;
            MySwal.fire("OOPS!", message, "error");
          }
        })
        .catch((error) => console.error(error))
        .finally(() => updateUserContext(userDispatch));
    } else {
      return;
    }
  });
}

export default fireAddPointsNotification;
