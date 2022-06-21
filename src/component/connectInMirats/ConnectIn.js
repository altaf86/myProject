import React from "react";
import styles from "./ConnectIn.module.css";
import { BsArrowRight } from "react-icons/bs";
import bubbles from "../../assets/bubles.png";
const ConnectIn = () => {
  return (
    <div className={styles.connectinMainContainer}>
      <div className={styles.connectionHeader}>
        <div className={styles.connectionHeaderLeft}>
          <h3>Mirats Insights</h3>
        </div>
        <div className={styles.connectionHeaderRight}>
          <button>
            Resend Email <BsArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.connectinBody}>
        <div className={styles.connectinBodyHero}>
          <div className={styles.bodyheroContent}>
            <h1>Hello, you're one click away </h1>
            <h4>
              Hit the button to verify and start your application process as
              soon as possible and become our supllier.
            </h4>
          </div>
        </div>
        <div className={styles.connectJoinIn}>
          <h1>Connect it. Join us.</h1>
          <p>
            Monetizing your audience with Ads is an old way to earn.it's time to
            connect with us and join in a mission to enchance the consumer's
            life and make their day-to-day life more manageable by asking them
            to share feedback on our surveys to contribute to the research part
            of big companies so that whishes can be implemented in the future
            updates/productions of the product
          </p>
        </div>
        <div className={styles.partnerSuccessContainer}>
          <h1>Partner Success is our Success.</h1>
          <div className={styles.partnerSuccessContent}>
            <div className={styles.partnerSuccessLeft}>
              <p>
                Partner with Mirats Insights means access to your own dedicated
                partner success team which will proactively manage all your
                needs. You can expect superior services levels focussed on
                speedy implementation and shared commitment to revenue growth.We
                are commitment to new-innovative technology which eventually
                helps you to monetise your audience through Mirats Insights. for
                your bottom line.
              </p>
            </div>
            <div className={styles.partnerSuccessRight}>
              <img src={bubbles} />
            </div>
          </div>
        </div>
        <div className={styles.connectinFooter}>
          <ul>
            <li>Mirats Insights</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectIn;
