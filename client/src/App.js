import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import NavbarTop from "./components/particles/NavbarTop";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";

import { checkAuth } from "./store/utils/thunkCreators";
import Sidebar from "./components/particles/Sidebar";
import Footer from "./components/particles/Footer";
import AppointmentPage from "./components/pages/AppointmentPage";
import CalendarPage from "./components/pages/CalendarPage";

function App(props) {
  const { checkAuth } = props;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App d-flex flex-column ">
        <div className="container">
          <div className="row">
            <NavbarTop />
            <div className="col-12 col-md-2 ">
              <Sidebar />
            </div>
            <div className="col ">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/appointment">
                  <AppointmentPage />
                </Route>
                <Route path="/calendar">
                  <CalendarPage />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <div className="footer mt-auto">
          <Footer />
        </div>
      </div>
      {/* // */}
     

      {/* // */}
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: (credentials) => {
      dispatch(checkAuth(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
