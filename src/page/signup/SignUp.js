import React from "react";
import styles from "./signup.module.css";
// ***************mui comps***************
import TextField from "@mui/material/TextField";

import { MdOutlineEmail } from "react-icons/md";
import { BiLock, BiUser } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { RiLoginCircleLine } from "react-icons/ri";
import { UserAuthContext } from "../../context/UserContext";
import signUpHero from "../../assets/SignUpHero.png";
// button component

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#3949AB"),
  backgroundColor: "#3949AB",
  "&:hover": {
    backgroundColor: "#192fbd",
  },
}));
const SignUp = () => {
  // *****************useContext******************
  const { createUser } = React.useContext(UserAuthContext);
  // ****************/useContext*******************
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    confirmPassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setUserDetails((preValue) => ({
      ...preValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPasswordd = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //------------------ User Input Details State-------------------
  const [userDetails, setUserDetails] = React.useState({});
  //------------------ Input HandleChange Function---------------
  const handleInputChange = (e) => {
    setUserDetails((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };
  //------------------- handle SignUp Submit------------------------
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    createUser(userDetails.email, userDetails.password);
  };
  console.log(userDetails);
  return (
    <>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpContentContainer}>
          <div className={styles.signUpLeft}>
            <img src={signUpHero} alt="" />
            <h3>Welcome aboard my friend</h3>
            <h4>just a couple of clicks and we start</h4>
          </div>
          <div className={styles.signUpRight}>
            <div className={styles.signUpRightContent}>
              <h2>Sign-Up</h2>
              <form onSubmit={(e) => handleSignUpSubmit(e)}>
                {/* Name */}
                <TextField
                  name="name"
                  onChange={(e) => handleInputChange(e)}
                  id="outlined-textarea"
                  sx={{ my: 1 }}
                  placeholder="Name"
                  multiline
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <FaRegUser
                        size={24}
                        color="grey"
                        style={{ marginRight: "0.65vmax" }}
                      />
                    ),
                  }}
                />
                {/* email */}
                <TextField
                  className={styles.Field}
                  id="outlined-start-adornment"
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                  sx={{ my: 1 }}
                  placeholder="Email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <MdOutlineEmail
                        size={33}
                        color="grey"
                        style={{ marginRight: "0.5vmax" }}
                      />
                    ),
                  }}
                />
                {/* password */}
                <OutlinedInput
                  placeholder="Password"
                  name="password"
                  fullWidth
                  sx={{ my: 1 }}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  startAdornment={
                    <BiLock
                      size={37}
                      color="grey"
                      style={{ marginRight: "0.35vmax" }}
                    />
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        // aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* confirm password */}
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  fullWidth
                  sx={{ my: 1 }}
                  type={values.showConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  startAdornment={
                    <BiLock
                      size={37}
                      color="grey"
                      style={{ marginRight: "0.35vmax" }}
                    />
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPasswordd}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* button */}
                <ColorButton
                  className={styles.signUpBtn}
                  type="submit"
                  id="signUpBtn"
                  variant="contained"
                  sx={{ my: 2, fontSize: "1.2vmax", fontWeight: 500 }}
                  fullWidth
                >
                  Sign Up{" "}
                  <RiLoginCircleLine
                    size={24}
                    color="white"
                    className={styles.signUpBtnIcon}
                    style={{ marginLeft: "0.8vmax" }}
                  />
                </ColorButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
