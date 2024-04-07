import React from "react";
import styles from "./Button.module.css";

export const Button = ({ text, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
