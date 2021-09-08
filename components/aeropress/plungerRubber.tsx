import { FC } from "react";
import styles from "./aeropress.module.scss";
import classsNames from "classnames";

export const PlungerRubber: FC = () => (
  <>
    <div className={classsNames(styles.rubber, styles["--top"])}></div>
    <div className={classsNames(styles.rubber, styles["--middle"])}></div>
    <div className={classsNames(styles.rubber, styles["--bottom"])}></div>
  </>
);
