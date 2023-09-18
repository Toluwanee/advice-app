import React, { useEffect, useState } from "react";
import styles from "./Advice.module.css";
import dice from "../Assets/icon-dice.svg";
import desktopPattern from "../Assets/pattern-divider-desktop.svg";
import mobilePattern from "../Assets/pattern-divider-mobile.svg";

const Advice = () => {
  const [advice, setAdvice] = useState({
    id: "",
    quote: "",
  });

  const [buttonClick, setButtonClick] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          quote: data.slip.advice,
        })
      )
      .catch((error) => console.error("Error ", error));
  }, [buttonClick]);

  const generateNewQuote = () => {
    setButtonClick(buttonClick + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.id}>
              <p> ADVICE #{advice.id} </p>
            </div>
            <div className={styles.quote}>
              <p> “{advice.quote}” </p>
            </div>
            <div className={styles.image}>
              <picture>
                <source media="(min-width: 394px)" srcSet={desktopPattern} />
                <source media="(max-width: 393px)" srcSet={mobilePattern} />
                <img src={desktopPattern} alt="Divider" />
              </picture>
            </div>
          </div>
          <div className={styles.dice} onClick={generateNewQuote}>
            <img src={dice} alt="Dice" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
