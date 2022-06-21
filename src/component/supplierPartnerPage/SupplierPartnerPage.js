import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import styles from "./SupplierPartnerPage.module.css";
function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            color="text.dark"
            sx={{ fontWeight: "900", my: 1 }}
          >
            {`${Math.round(props.value)}%`} Completed
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: "20px",
            borderRadius: "20px",
            backgroundColor: " rgba(84,160,192,1)",
            color: "rgba(59, 102, 120, 1)",
          }}
        />
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
const SupplierPartnerPage = () => {
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className={styles.supplierPageMainContainer}>
        <div className={styles.supplierPageContentContainer}>
          <div className={styles.contentHeader}>
            <h5>Sunday,June 3</h5>
            <h1>Good afternoon, Lokesh!</h1>
            <h3>
              Thank you for applying to our Supplier Partner <br /> Initiative.
              We can’t wait to see you onboard.
            </h3>
          </div>
          <div className={styles.contentBody}>
            <div className={styles.contentBodyContentContainer}>
              <p>Dear Lokesh</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!{" "}
              </p>
              <p>
                Provident similique accusantium nemo autem. Veritatis obcaecati
                tenetur iure eius earum ut molestias architecto voluptate
                aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
                sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
                fuga?
              </p>
              <p>
                Ipsa laudantium molestias eos sapiente officiis modi at sunt
                excepturi expedita sint? Sed quibusdam recusandae alias error
                harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
                dolorem! Officiis iure rerum voluptates a cumque velit quibusdam
                sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                fugiat, temporibus enim commodi iusto libero magni deleniti quod
                quam consequuntur! Commodi minima excepturi repudiandae velit
                hic maxime doloremque. Quaerat provident commodi consectetur
                veniam similique ad earum omnis ipsum saepe, voluptas, hic
                voluptates pariatur est explicabo fugiat, dolorum eligendi quam
                cupiditate excepturi mollitia maiores labore suscipit quas?
                Nulla, placeat.{" "}
              </p>
              <p>
                Thanks, <br /> Ayaan <br /> Head of Global Sales | Distinguished
                Manager
              </p>
            </div>
          </div>
          <div className={styles.contentFooter}>
            <div className={styles.contentFooterHeader}>
              <h1>Fill out your application and submit.</h1>
              <h4>
                We need you to know more about you, in order to do know you more
                <br /> we have few questions aligned about your bussiness please
                fill the <br /> questions with your answers and submit us to
                review them.
              </h4>
            </div>
            <div className={styles.contentFooterBody}>
              <div className={styles.footerBodyContent}>
                <div className={styles.footerBodyRow}>
                  <span className={styles.green}>12</span>
                  <h3>Panel Registeration</h3>
                  <span className={styles.cyan}>12% completed</span>
                </div>
                <div className={styles.footerBodyRow}>
                  <span className={styles.yellow}>3</span>
                  <h3>quaulity check</h3>
                  <span className={styles.cyan}>0% completed</span>
                </div>
                <div className={styles.footerBodyRow}>
                  <span className={styles.yellow}>3</span>
                  <h3>Panel Quality</h3>
                  <span className={styles.cyan}>0% completed</span>
                </div>
                <div className={styles.footerBodyRow}>
                  <span className={styles.green}>4</span>
                  <h3>Business Model</h3>
                  <span className={styles.cyan}>90% completed</span>
                </div>
                <div className={styles.footerBodyRow}>
                  <span className={styles.yellow}>3</span>
                  <h3>Recruitment Methods</h3>
                  <span className={styles.cyan}>0% completed</span>
                </div>
                <div className={styles.footerBodyRow}>
                  <span className={styles.yellow}>3</span>
                  <h3>Traffic Sources</h3>
                  <span className={styles.cyan}>0% completed</span>
                </div>
                <div className={styles.footerBodyRow}>
                  <span className={styles.yellow}>2</span>
                  <h3>Miscellaneous</h3>
                  <span className={styles.cyan}>0% completed</span>
                </div>
              </div>
            </div>
            <div className={styles.contentFooterProgressBar}>
              <Box sx={{ width: "100%" }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierPartnerPage;
