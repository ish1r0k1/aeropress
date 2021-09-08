import { FC } from "react";
import { Plunger } from "./plunger";
import { Chamber } from "./chamber";
import styles from "./aeropress.module.scss";

export const AeroPress: FC = () => {
  return (
    <div className={styles.aeroPress}>
      <Plunger />
      <Chamber />
    </div>
  );
};
