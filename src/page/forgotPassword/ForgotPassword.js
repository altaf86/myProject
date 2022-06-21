import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./ForgotPassword.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../context/UserContext";
const ForgotPassword = () => {
  const [email, setEmail] = useState({});
  const { passwordReset } = useContext(UserAuthContext);
  const resetEmail = () => {
    passwordReset(email.email);
  };
  console.log(email);
  return (
    <>
      <div className={styles.ForgotPasswordContainer}>
        <div className={styles.ForgotPasswordContentContainer}>
          <div className={styles.ForgotPasswordContentContainerLeft}>
            <div className={styles.ForgotPasswordContentContainerLeftContent}>
              <h3>Important Information</h3>

              <h4>
                Please <strong>read</strong> the information below and then
                kindly <strong>share</strong> the requested information.
              </h4>
              <ul>
                <li>
                  <h4 id="try">Do not reveal your password to anybody</h4>
                </li>
                <li>
                  <h4> Do not reuse passwords</h4>
                </li>
                <li>
                  <h4>Use Alphanumeric passwords </h4>
                </li>
                <li>
                  <h4>Your Login ID. and security answer are required</h4>
                </li>
                <li>
                  <h4>Login IDs are case sensitive</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.ForgotPasswordContentContainerRight}>
            <div className={styles.ForgotPasswordContentContainerRightContent}>
              <h1>
                Forgot <br /> Password ?
              </h1>
              <h4>
                Dont worry. <b>We can help.</b>
              </h4>
              {/* email */}
              <TextField
                className={styles.emailField}
                id="outlined-start-adornment"
                name="email"
                variant="standard"
                onChange={(e) => setEmail({ [e.target.name]: e.target.value })}
                sx={{
                  my: 1,
                  height: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                placeholder="Enter Your Email"
                fullWidth
                autoComplete="off"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <MdOutlineEmail
                      size={33}
                      color="#101010"
                      style={{
                        marginRight: "0.5vmax",
                        marginLeft: "0.6vmax",
                      }}
                    />
                  ),
                }}
              />
              <div className={styles.sendEmailActionContainer}>
                <h3>
                  <Link to="/login">
                    Remember your password?
                    <br />
                    Back to <strong>Login</strong>
                  </Link>
                </h3>
                {/* send email button */}
                <Button
                  variant="contained"
                  className={styles.sendMailBTN}
                  onClick={() => resetEmail(email)}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
