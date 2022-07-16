import React from "react";
import { connect } from "react-redux";

function HomePage() {
  return <div>HomePage</div>;
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(HomePage);
