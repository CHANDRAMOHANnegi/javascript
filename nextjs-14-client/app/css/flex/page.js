"use client";
import styles from './styles.module.css'
import React from "react";

export const FLEX = () => {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={`${styles.item} ${styles.auto}`}>auto</div>
        <div className={`${styles.item} ${styles.auto}`}>auto</div>
        <div className={`${styles.item} ${styles.auto}`}>auto</div>
      </div>

      <div className={styles.flexContainer}>
        <div className={`${styles.item} ${styles.auto}`}>auto</div>
        <div className={`${styles.item} ${styles.initial}`}>initial</div>
        <div className={`${styles.item} ${styles.initial}`}>initial</div>
      </div>

      <div className={styles.flexContainer}>
        <div className={`${styles.item} ${styles.auto}`}>auto</div>
        <div className={`${styles.item} ${styles.auto}`}>auto</div>
        <div className={`${styles.item} ${styles.none}`}>none</div>
      </div>

      <div className={styles.flexContainer}>
        <div className={`${styles.item} ${styles.initial}`}>initial</div>
        <div className={`${styles.item} ${styles.none}`}>none</div>
        <div className={`${styles.item} ${styles.none}`}>none</div>
      </div>

      <div className={styles.flexContainer}>
        <div className={`${styles.item} ${styles.four}`}>4</div>
        <div className={`${styles.item} ${styles.two}`}>2</div>
        <div className={`${styles.item} ${styles.one}`}>1</div>
      </div>
    </>
  );
};

export default FLEX;
