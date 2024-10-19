import { useContext } from "react";
import { ModalContext } from "./Modal";
import Button from "./Button";
import styles from "../modules/ConfirmAction.module.css";

function ConfirmAction({
  onConfirm,
  type,
  name,
  cancelText,
  message,
  confirmText,
}) {
  const { close } = useContext(ModalContext);

  return (
    <>
      <div className={styles.header}>
        <h3 className={styles[type]}>
          Are you sure you want to {type}
          {type === "logout" && " ?"} {name}
        </h3>
        {message && <span>{message}</span>}
      </div>

      <Button
        type={"revert"}
        variation={"medium"}
        onClick={close}
        aria-label={`Cancel ${type}`}
      >
        {cancelText || "CANCEL"}
      </Button>
      <Button
        type={"danger"}
        onClick={onConfirm}
        aria-label={`Confirm ${type}`}
        variation={"medium"}
      >
        {type || confirmText}
      </Button>
    </>
  );
}

export default ConfirmAction;

ConfirmAction.defaultProps = {
  type: "confirm",
  name: "",
  message: "",
  confirmText: "",
};
