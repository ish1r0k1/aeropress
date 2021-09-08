import classNames from "classnames";
import { FC } from "react";
import styles from "./aeropress.module.scss";
import { Chamber } from "./chamber";
import { Plunger } from "./plunger";

export const AeroPress: FC<{ isPressed?: boolean }> = ({ isPressed }) => {
  return (
    <div
      className={classNames(styles.aeroPress, {
        [styles["--pressed"]]: isPressed,
      })}
    >
      <Plunger />
      <Chamber />
    </div>
  );
};
