import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import Nav from "./Nav";

function LeaderBoard(props) {
  return (
    <div>
      <Nav />
      <div>LeaderBoard</div>
      <div style={{ margin: "30px" }}>
        <Link
          to="/"
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
            props.dispatch(setAuthedUser("none"));
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
