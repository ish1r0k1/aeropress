import { NextPage } from "next";
import { useState } from "react";
import { AeroPress as AeroPressComponent } from "../components/aeropress";
import styles from "../styles/Aeropress.module.css";

const AeroPress: NextPage = () => {
  const [state, setState] = useState(false);

  const onClick = () => setState(!state);

  return (
    <>
      <AeroPressComponent isPressed={state} />
      <div className={styles.buttonContainer}>
        <button onClick={onClick}>click me!</button>
      </div>
    </>
  );
};

export default AeroPress;
