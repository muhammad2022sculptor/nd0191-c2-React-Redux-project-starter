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
import ShowQuestion from "./components/ShowQuestion";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <header>
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
            path="/add"
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
          <Route
            path="/question/:question_id"
            exact
            element={
              props.authedUser !== "none" &&
              Object.keys(props.users).length > 0 ? (
                <ShowQuestion />
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
