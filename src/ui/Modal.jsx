import { cloneElement, createContext, useContext, useState } from "react";
import styles from "../modules/Modal.module.css";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

export const ModalContext = createContext();

function Modal({ children }) {
  const [modalName, setModalName] = useState("");
  const close = () => setModalName("");
  const open = setModalName;

  return (
    <ModalContext.Provider value={{ close, open, modalName }}>
      {children}
    </ModalContext.Provider>
  );
}

export default Modal;

function OpenModal({ children, name }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(name) });
}

function Window({ children, name }) {
  const { close, modalName } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== modalName) return null;

  return createPortal(
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div ref={ref} className={styles.modal}>
          <button onClick={close} className={styles.btn}>
            <HiXMark />
          </button>

          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
function CloseModal({ children }) {
  const { close } = useContext(ModalContext);
  function handleClick() {
    close();
  }

  return <span onClick={handleClick}>{children}</span>;
}

Modal.Window = Window;
Modal.Open = OpenModal;
Modal.Close = CloseModal;
