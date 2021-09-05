import { FC } from "react";
import styles from "./plunger.module.scss";
import classsNames from "classnames";
import { PlungerRubber } from "../plungerRubber";

export const Plunger: FC<{ className: string }> = ({ className }) => (
  <div className={classsNames(className, styles.plunger)}>
    <div className={styles.cylinderHole}></div>
    <div className={styles.cylinderBody}>
      <div className={classsNames(styles.cylinder, styles["--top"])}></div>
      <div className={classsNames(styles.cylinder, styles["--middle"])}></div>
      <div className={classsNames(styles.cylinder, styles["--bottom"])}></div>
    </div>
    <div className={styles.rubberContainer}>
      <PlungerRubber />
    </div>
  </div>
);
