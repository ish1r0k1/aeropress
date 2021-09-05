import { FC } from "react";
import styles from "./chamber.module.scss";
import classsNames from "classnames";
import { Liquid } from "../liquid";

const edges = [...new Array(8)].map((_, i) => {
  return (
    <div key={i} className={classsNames(styles.cylinderEdge, styles[`--${i}`])}>
      <div className={styles.cylinderEdge__content}></div>
    </div>
  );
});

export const Chamber: FC<{ className: string }> = ({ className }) => (
  <div className={classsNames(styles.chamber, className)}>
    <div className={styles.cylinderContainer}>
      <div className={styles.cylinderBody}>
        <div className={classsNames(styles.cylinder, styles["--top"])}></div>
        <div className={classsNames(styles.cylinder, styles["--middle"])}></div>
        <div className={classsNames(styles.cylinder, styles["--bottom"])}></div>
      </div>
      <div className={classsNames(styles.liquidContainer)}>
        <Liquid />
      </div>
      <div className={styles.cylinderHole}></div>
    </div>
    <div className={styles.cylinderEdgeContainer}>{edges}</div>
  </div>
);
