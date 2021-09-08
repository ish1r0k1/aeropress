import { FC } from "react";
import styles from "../aeropress/aeropress.module.scss";
import classsNames from "classnames";
import { Liquid } from "./liquid";

const edges = [...new Array(8)].map((_, i) => {
  return (
    <div key={i} className={classsNames(styles.chamberEdge, styles[`--${i}`])}>
      <div className={styles.chamberEdge__content}></div>
    </div>
  );
});

export const Chamber: FC = () => (
  <div className={styles.chamber}>
    <div className={styles.cylinderContainer}>
      <div className={classsNames(styles.cylinder, styles["--top"])}></div>
      <div className={classsNames(styles.cylinder, styles["--middle"])}></div>
      <div className={classsNames(styles.cylinder, styles["--bottom"])}></div>
    </div>
    <div className={classsNames(styles.liquidContainer)}>
      <Liquid />
    </div>
    <div className={styles.cylinderHole}></div>
    <div className={styles.chamberEdgeContainer}>{edges}</div>
  </div>
);
