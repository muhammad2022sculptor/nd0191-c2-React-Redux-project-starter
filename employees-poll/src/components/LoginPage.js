import React from "react";

function LoginPage(props) {
  return (
    <div>
      <h1>Select the user</h1>
      <select style={{ width: 250, height: 30, borderRadius: 50, padding: 5 }}>
        {props.users.map((user) => {
          return <option key={user.id}>{user}</option>;
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

export default LoginPage;
