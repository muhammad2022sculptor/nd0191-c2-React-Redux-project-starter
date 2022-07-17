import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function LoginPage(props) {
  return (
    <div>
      <h1>Employees Poll</h1>
      <h4>Select the user</h4>
      <select
        value={props.authedUser}
        style={{
          fontWeight: "bolder",
          fontSize: 15,
          width: 250,
          height: 30,
          borderRadius: 50,
          padding: 5,
        }}
        onChange={(e) => {
          props.dispatch(setAuthedUser(e.target.value));
        }}
      >
        <option value="none">Choose User!</option>
        {Object.keys(props.users).length > 0 &&
          Object.keys(props.users).map((user) => (
            <option key={user} value={props.users[user].id}>
              {props.users[user].id}
            </option>
          ))}
      </select>
      <div style={{ margin: "30px" }}>
        <Link
          to={props.authedUser === "none" ? "/" : "/home"}
          style={{
            textDecoration: "none",
            backgroundColor: "#00ff00",
            padding: "2px 30px",
            borderRadius: "30px",
          }}
          onClick={() => {
            if (props.authedUser === "none") {
              alert("Please Select a User First!");
            }
          }}
        >
          Login
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
