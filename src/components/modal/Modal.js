import React from "react";
import styles from "./modal.module.css";

import { TiTick } from "react-icons/ti";

const Modal = ({ text, setModalOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={() => setModalOpen(false)}></div>
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
          X
        </button>
        <div className={styles.svg}>
          <label>
            <TiTick />
          </label>
        </div>
        <p className={styles.message}>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
