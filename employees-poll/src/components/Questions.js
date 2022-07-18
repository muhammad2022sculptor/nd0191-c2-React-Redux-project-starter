import React from "react";
import { connect } from "react-redux";
import SingleQuestion from "./SingleQuestion";

function Questions(props) {
  const [unAnswered, setUnAnswered] = React.useState([]);

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
          return dateA - dateB;
        })
    );
  }, []);

  return (
    <div>
      <div>
        <h1>New Questions</h1>
        {unAnswered.map((question) => {
          let time = new Date(props.questions[question].timestamp);
          return (
            <SingleQuestion
              answered={false}
              key={time}
              time={time}
              question={question}
            />
          );
        })}
      </div>
      <div>
        <h1>Answered Questions</h1>
        {Object.keys(props.users).map((user) => {
          if (
            user === props.authedUser &&
            Object.keys(props.users[user].answers).length > 0
          )
            return Object.keys(props.users[user].answers)
              .sort(function (a, b) {
                var dateA = props.questions[a].timestamp,
                  dateB = props.questions[b].timestamp;
                return dateA - dateB;
              })
              .map((question) => {
                let time = new Date(props.questions[question].timestamp);
                return (
                  <SingleQuestion
                    answered={true}
                    key={time}
                    time={time}
                    question={question}
                  />
                );
              });
        })}
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
