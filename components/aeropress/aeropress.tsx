import { FC } from "react";
import { Plunger } from "../plunger";
import { Chamber } from "../chamber";
import styles from "./aeropress.module.scss";
import classNames from "classnames";

export const AeroPress: FC = () => {
  return (
    <div className={styles.aeroPress}>
      <Plunger className={classNames(styles.plunger)} />
      <Chamber className={styles.chamber} />
    </div>
  );
};
