import { FC } from "react";
import styles from "./aeropress.module.scss";
import classNames from "classnames";

export const Liquid: FC = () => (
  <>
    <div className={classNames(styles.liquid, styles["--top"])}></div>
    <div className={classNames(styles.liquid, styles["--middle"])}></div>
    <div className={classNames(styles.liquid, styles["--bottom"])}></div>
  </>
);
