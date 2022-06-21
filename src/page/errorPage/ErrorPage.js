import React from "react";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";
import moon from "../../assets/moonn.png";
const ErrorPage = () => {
  const [timer, setTimer] = React.useState(10);
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
    setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);
  return (
    <>
      <div className={styles.forgotPasswordContainer}>
        <div className={styles.forgotPasswordContentContainer}>
          <div className={styles.forgotPasswordLeft}>
            <img src={moon} alt="" />
            <div className={styles.forgotPasswordInnerLeft}>
              <h1>404 </h1>
            </div>
          </div>
          {/* <div className={styles.forgotPasswordRight}>
          </div> */}
          <div className={styles.backContainer}>
            <button className={styles.backBTN} onClick={() => navigate("/")}>
              Back To Home Page
            </button>
            <h6 style={{ color: "white", fontSize: "1vmax" }}>
              Auto Redirecting in {timer}s
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
