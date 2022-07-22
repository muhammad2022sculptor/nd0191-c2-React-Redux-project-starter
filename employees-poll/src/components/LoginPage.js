import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function LoginPage(props) {
  return (
    <div className="App">
      <h1>Employees Poll</h1>
      <h2>Select the user</h2>
      <select
        data-testid="user-name-input"
        value={props.authedUser || ""}
        style={{
          fontSize: "20px",
          width: 350,
          height: 50,
          borderRadius: 10,
          paddingLeft: 10,
        }}
        onChange={(e) => {
          props.dispatch(setAuthedUser(e.target.value));
        }}
      >
        <option data-testid="select-option" value="none">
          Choose User!
        </option>
        {Object.keys(props.users).length > 0 &&
          Object.keys(props.users).map((user) => (
            <option key={user} value={props.users[user].id}>
              {props.users[user].id}
            </option>
          ))}
      </select>
      <div style={{ margin: "30px" }}>
        <Link
          data-testid="login-button"
          to={props.authedUser === "none" ? "/" : "/home"}
          style={{
            textDecoration: "none",
            backgroundColor: "#00ff00",
            padding: "10px 30px",
            borderRadius: "10px",
            fontSize: 20,
          }}
          onClick={() => {
            if (props.authedUser === "none") {
              alert("Please Select a User First!");
            }
          }}
        >
          <strong>Login</strong>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(LoginPage);
