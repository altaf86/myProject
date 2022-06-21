import logo from "./logo.svg";
import "./App.css";
import { UserContext } from "./context/UserContext";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
// -------------------pages--------------------
import Login from "./page/logIn/Login";
import SignUp from "./page/signup/SignUp";
import HomePage from "./page/homePage/HomePage";
import ErrorPage from "./page/errorPage/ErrorPage";
import ForgotPassword from "./page/forgotPassword/ForgotPassword";
import ResetPassword from "./page/resetPassword/ResetPassword";
import Chat from "./page/Chat/Chat";
function App() {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </UserContext>
  );
}

export default App;
