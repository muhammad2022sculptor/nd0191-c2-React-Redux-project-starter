import React from "react";
import { connect } from "react-redux";
import { setShowQuestionStates } from "../actions/showquestionstates";
import SingleQuestion from "./SingleQuestion";

function Questions(props) {
  const [unAnswered, setUnAnswered] = React.useState([]);
  const [Answered, setAnswered] = React.useState([]);

  React.useEffect(() => {
    setUnAnswered(
      Object.keys(props.questions)
        .filter((question) => {
          let optionOne = props.questions[question].optionOne["votes"];
          let optionTwo = props.questions[question].optionTwo["votes"];
          return (
            !(
              optionOne.includes(props.authedUser) ||
              optionTwo.includes(props.authedUser)
            ) && props.questions[question].id
          );
        })
        .sort(function (a, b) {
          var dateA = props.questions[a].timestamp,
            dateB = props.questions[b].timestamp;
          return dateB - dateA;
        })
    );

    setAnswered(
      Object.keys(props.users)
        .map((user) => {
          if (
            user === props.authedUser &&
            Object.keys(props.users[user].answers).length > 0
          )
            return Object.keys(props.users[user].answers);
        })
        .sort(function (a, b) {
          var dateA = props.questions[a].timestamp,
            dateB = props.questions[b].timestamp;
          return dateB - dateA;
        })[0]
        .sort(
          (b, a) => props.questions[a].timestamp - props.questions[b].timestamp
        )
    );
  }, [props.questions]);

  return (
    <div>
      <div>
        <h1>New Questions</h1>
        {unAnswered.length > 0 ? (
          unAnswered.map((question) => {
            let time = new Date(props.questions[question].timestamp);
            return (
              <SingleQuestion
                answered={false}
                key={time}
                time={time}
                question={question}
              />
            );
          })
        ) : (
          <p style={{ padding: "20px", background: "black", fontSize: "30px" }}>
            No New Questions Yet!
          </p>
        )}
      </div>
      <div>
        <h1>Answered Questions</h1>
        {Answered.length > 0 ? (
          props.dispatch(setShowQuestionStates(Answered, unAnswered)) &&
          Answered.map((question) => {
            let time = new Date(props.questions[question].timestamp);
            return (
              <SingleQuestion
                answered={true}
                key={time}
                time={time}
                question={question}
              />
            );
          })
        ) : (
          <p style={{ padding: "20px", background: "black", fontSize: "30px" }}>
            No Answered Questions Yet!
          </p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Questions);
