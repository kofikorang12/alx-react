import React, { Fragment } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
