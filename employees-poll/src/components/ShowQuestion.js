import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

function ShowQuestion(props) {
  const { question_id } = useParams();
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="App">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/31811747?v=4"
          alt="yeah"
        />
        <p>{props.questions[question_id].id}</p>
        <p>Option One: {props.questions[question_id].optionOne["text"]}</p>
        <p>Option Two: {props.questions[question_id].optionTwo["text"]}</p>
        <p>Selected: {props.users[props.authedUser].answers[question_id]}</p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(ShowQuestion);
