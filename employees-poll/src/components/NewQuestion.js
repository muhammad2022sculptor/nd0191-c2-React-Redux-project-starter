import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

function NewQuestion() {
  return (
    <div>
      <Nav />
      <div>NewQuestion</div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(NewQuestion);
