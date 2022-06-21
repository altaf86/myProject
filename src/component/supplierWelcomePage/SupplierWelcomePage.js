import React from "react";
import styles from "./SupplierWelcomePage.module.css";
const SupplierWelcomePage = () => {
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomePageContentContainer}>
        <h1>
          Welcome to the <br />
          Mirats Insights <strong> Supe Portal.</strong>
        </h1>
        <h4>
          We are thrilled and hopeful that your addition would bring expansion
          to the firm with your expertise and powerful integration.
        </h4>
        <button>Let’s get Started.</button>
      </div>
    </div>
  );
};

export default SupplierWelcomePage;
