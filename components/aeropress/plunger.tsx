import { FC } from "react";
import classsNames from "classnames";
import { PlungerRubber } from "./plungerRubber";
import styles from "../aeropress/aeropress.module.scss";

export const Plunger: FC = () => (
  <div className={styles.plunger}>
    <div className={styles.cylinderHole}></div>
    <div className={styles.cylinderContainer}>
      <div className={classsNames(styles.cylinder, styles["--top"])}></div>
      <div className={classsNames(styles.cylinder, styles["--middle"])}></div>
      <div className={classsNames(styles.cylinder, styles["--bottom"])}></div>
    </div>
    <div className={styles.rubberContainer}>
      <PlungerRubber />
    </div>
  </div>
);
