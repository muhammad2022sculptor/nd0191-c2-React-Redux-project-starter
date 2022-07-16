import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function LoginPage(props) {
  return (
    <div>
      <h1>Select the user</h1>
      <select
        value="none"
        style={{ width: 250, height: 30, borderRadius: 50, padding: 5 }}
        onChange={(e) => {
          props.dispatch(setAuthedUser(e.target.value));
        }}
      >
        <option value="none">Choose User!</option>
        {Object.keys(props.users).length > 0 &&
          Object.keys(props.users).map((user) => {
            return <option key={user}>{props.users[user].id}</option>;
          })}
      </select>
      <div>
        <button
          style={{ width: 100, height: 30, borderRadius: 50, margin: 40 }}
        >
          <strong>
            <Link to="/home">Login</Link>
          </strong>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(LoginPage);
