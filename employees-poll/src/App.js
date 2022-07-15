import "./App.css";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import users from "./reducers/users";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" exact element={<LoginPage users={props.users} />} />
        </Routes>
      </header>
    </div>
  );
}

export default connect(({ users }) => {
  return users;
})(App);
