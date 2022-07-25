import "./App.css";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import HomePage from "./components/HomePage";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import CheckQuestion from "./components/CheckQuestion";

function App({ dispatch, authedUser, users }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <div>
        <Routes>
          <Route
            path="*"
            element={
              <div className="App">
                <h1>Invalid Address! Go Back</h1>
              </div>
            }
          />
          <Route
            path="/"
            exact
            element={
              Object.keys(users).length > 0 ? (
                <LoginPage />
              ) : (
                <div className="App">
                  <h1>Loading...</h1>
                </div>
              )
            }
          />
          <Route
            path="/home"
            exact
            element={
              authedUser !== "none" && Object.keys(users).length > 0 ? (
                <HomePage />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/leaderboard"
            exact
            element={
              authedUser !== "none" && Object.keys(users).length > 0 ? (
                <LeaderBoard />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/add"
            exact
            element={
              authedUser !== "none" && Object.keys(users).length > 0 ? (
                <NewQuestion />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/question/:question_id"
            exact
            element={
              authedUser !== "none" && Object.keys(users).length > 0 ? (
                <CheckQuestion />
              ) : (
                <LoginPage />
              )
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(App);
