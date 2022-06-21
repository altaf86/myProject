import React from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../context/UserContext";
import styles from "./login.module.css";
import LoginHero from "../../assets/newLoginHero.png";
const Login = () => {
  // -----------------useContext------------------------
  const { userLogin } = React.useContext(UserAuthContext);
  // -----------------/useContext------------------------
  //----------------- Login Details State----------------
  const [userLoginInfo, setUserLoginInfo] = React.useState({});
  //-----------------/Login Details State----------------
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    userLogin(userLoginInfo.email, userLoginInfo.password);
  };
  const handleLoginInputchange = (e) => {
    setUserLoginInfo((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(userLoginInfo);
  return (
    <div className={styles.mainLoginContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.loginLeft}>
          <div className={styles.loginLeftContent}>
            <h3>Your Logo</h3>
            <h1>Login</h1>
            <form onSubmit={(e) => handleLoginSubmit(e)}>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => handleLoginInputchange(e)}
                id="Email"
                placeholder="username@gmail.com"
                required
              />
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => handleLoginInputchange(e)}
                id="Password"
                placeholder="Password"
                required
              />
              <Link to="/forgot-password" className={styles.link}>
                <h6>Forgot Password?</h6>
              </Link>
              <input type="submit" value="Sign In" />
            </form>
            <Link to="/signup" className={styles.link}>
              <h4>Don't have an account ?</h4>
            </Link>
          </div>
        </div>
        <div className={styles.loginRight}>
          <img src={LoginHero} alt="LogIn Hero" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Login;
