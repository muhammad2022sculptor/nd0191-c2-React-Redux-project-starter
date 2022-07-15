import "./App.css";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "./actions/shared";

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
        </Routes>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(App);
