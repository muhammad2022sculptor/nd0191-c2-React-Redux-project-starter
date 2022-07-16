import "./App.css";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            exact
            element={
              Object.keys(props.users).length > 0 ? (
                <LoginPage />
              ) : (
                <div>Loading...</div>
              )
            }
          />
          <Route
            path="/home"
            exact
            element={props.authedUser !== "none" ? <HomePage /> : <NotFound />}
          />
        </Routes>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(App);
