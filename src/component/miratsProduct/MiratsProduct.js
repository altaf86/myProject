import React from "react";
import styles from "./MiratsProduct.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MiratsProduct = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.miratsProductMainContainer}>
      <div className={styles.miratsProductFirstHeader}>
        <h1>Mirats Insights</h1>
      </div>
      <div className={styles.miratsProductSecondHeader}>
        <h4>Mirats Supplier Portal is launched.</h4>
        <a href="#">Learn more &#62;</a>
      </div>
      <div className={styles.miratsProductHeroContainer}>
        <div className={styles.productHeroContentContainer}>
          <h1>
            All Mirats Products. <br /> Only on Mirats One.
          </h1>
          <button>Visit One.</button>
          <p>
            Mirats Insights Official Website is work in progress. Releasing our
            new website super soon.
          </p>
        </div>
      </div>
      <div className={styles.miratsProductLaunch}>
        <div className={styles.miratsProductLaunchHeadings}>
          <h1>
            Mirats Insights is now going to launch Restech products super soon.
          </h1>
          <h1>
            Atomos Technologies and Mirats Insights partnered to make the
            technology based SaaS products for ResTech products.
          </h1>
        </div>
        <div className={styles.miratsProductLaunchDate}>
          <div className={styles.miratsProductLaunchDateLeft}>
            <h2>Launching in one month.</h2>
            <h1>Mirats One.</h1>
            <h3>
              You can create, manage and deploy projects from one single
              application. All-in-one tool for Research industry.
            </h3>
            <button>Visit to know more.</button>
          </div>
          <div className={styles.miratsProductLaunchDateRight}>
            <h2>Recently Launched</h2>
            <h1>Mirats Supplier Portal</h1>
            <h3>
              Apply for onboarding in our supply chain and contribute in our
              projects.
            </h3>
            <a href="#">Learn more &#62;</a>
            <button>Visit to know more.</button>
          </div>
        </div>
      </div>
      <div className={styles.miratsProductLaunchDateQuestionAndAnswerContainer}>
        <div className={styles.miratsProductQuestionAnswerContentContainer}>
          <h1>Questions? Answers.</h1>
          <div className={styles.questionAndAnswerAccordion}>
            <Accordion
              elevation={0}
              defaultExpanded
              style={{
                backgroundColor: "transparent",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.AccordionTitle}>
                  What is Mirats One?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.AccordionDescription}>
                  Mirats One is all in one stop for all your research needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} style={{ backgroundColor: "transparent" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={styles.AccordionTitle}>
                  What is Mirats One?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.AccordionDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} style={{ backgroundColor: "transparent" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={styles.AccordionTitle}>
                  What is Mirats One?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.AccordionDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.miratsProductThankYouContainer}>
            <h1>Thank you for visiting.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiratsProduct;
