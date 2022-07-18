import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

function LeaderBoard(props) {
  return (
    <div>
      <Nav />
      <div className="App">LeaderBoard</div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
