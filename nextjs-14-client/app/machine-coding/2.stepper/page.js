"use client";
import React, { useState } from "react";
import styles from "./stepper.module.css";

const Tag = ({ onPrev, onNext, children }) => {
  return (
    <>
      {children}
      <button onClick={onNext}>Next</button>
      <button onClick={onPrev}>Prev</button>
    </>
  );
};

const data = [
  { text: 1, key: 1, Comp: ({ onPrev, onNext }) => <Tag>1</Tag> },
  { text: 2, key: 2, Comp: ({ onPrev, onNext }) => <Tag>2</Tag> },
  { text: 3, key: 3, Comp: ({ onPrev, onNext }) => <Tag>3</Tag> },
  { text: 4, key: 4, Comp: ({ onPrev, onNext }) => <Tag>4</Tag> },
];

export const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = data.map((step, idx) => (
    <div
      key={idx}
      onClick={() => {
        setCurrentStep(idx);
      }}
      className={`${styles.steps} ${currentStep >= idx ? styles.active : ""}`}
    >
      {idx + 1}
    </div>
  ));

  const onNext = () => {
    if (currentStep !== data.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const Comp = data[currentStep].Comp;

  const progressLineWidth = (100 / (data.length - 1)) * currentStep;

  return (
    <section className={styles.stepper}>
      <div className={styles["steps-container"]}>
        <div className={styles["steps-wrapper"]}>{steps}</div>
        <div
          className={styles["progress-line"]}
          style={{
            width: `${progressLineWidth}%`,
          }}
        />
      </div>
      <div className={styles.tag}>
        {React.cloneElement(<Comp />, {
          onPrev,
          onNext,
        })}
      </div>
    </section>
  );
};

export default Stepper;
