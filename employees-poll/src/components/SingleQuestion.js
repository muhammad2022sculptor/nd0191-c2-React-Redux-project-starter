import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SingleQuestion(props) {
  return (
    <div
      style={{
        background: "#0F4C75",
        borderRadius: "10px",
        margin: "20px 20px",
        border: props.answered ? "solid #5FD068 2px" : "solid #F87474 2px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: "75%", textAlign: "left", margin: "10px" }}>
          <div>{props.users[props.questions[props.question].author].name}</div>
          <div>{props.time.toGMTString()}</div>
        </div>
        <div
          style={{
            flex: "25%",
          }}
        >
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              background: "#66BFBF",
              borderRadius: "0px 10px 10px 0px",
              height: "100%",
              width: "100%",
            }}
            to={`/question/${props.question}`}
          >
            <strong>Show Question</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(SingleQuestion);
