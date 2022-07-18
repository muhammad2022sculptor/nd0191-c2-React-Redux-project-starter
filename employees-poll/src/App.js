import "./App.css";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <header>
        <Routes>
          <Route path="*" element={<h1>Invalid Address! Go Back</h1>} />
          <Route
            path="/"
            exact
            element={
              Object.keys(props.users).length > 0 ? (
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
              props.authedUser !== "none" &&
              Object.keys(props.users).length > 0 ? (
                <HomePage />
              ) : (
                <NotFound />
              )
            }
          />
          <Route
            path="/leaderboard"
            exact
            element={
              props.authedUser !== "none" &&
              Object.keys(props.users).length > 0 ? (
                <LeaderBoard />
              ) : (
                <NotFound />
              )
            }
          />
          <Route
            path="/new"
            exact
            element={
              props.authedUser !== "none" &&
              Object.keys(props.users).length > 0 ? (
                <NewQuestion />
              ) : (
                <NotFound />
              )
            }
          />
        </Routes>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
  questions: state.questions,
});

export default connect(mapStateToProps)(App);
