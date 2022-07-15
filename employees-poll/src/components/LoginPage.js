import React from "react";
import { connect } from "react-redux";

function LoginPage(props) {
  return (
    <div>
      <h1>Select the user</h1>
      <select style={{ width: 250, height: 30, borderRadius: 50, padding: 5 }}>
        {Object.keys(props.users).length > 0 &&
          Object.keys(props.users).map((user) => {
            return <option key={user}>{user}</option>;
          })}
      </select>
      <div>
        <button
          style={{ width: 100, height: 30, borderRadius: 50, margin: 40 }}
        >
          <strong>Login</strong>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(LoginPage);
