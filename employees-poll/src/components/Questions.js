import React from "react";
import { connect } from "react-redux";
import {
  returnAnsweredQuestions,
  returnUnAnsweredQuestions,
} from "../api/helper";
import SingleQuestion from "./SingleQuestion";

function Questions(props) {
  const [unAnswered, setUnAnswered] = React.useState([]);
  const [Answered, setAnswered] = React.useState([]);

  React.useEffect(() => {
    setUnAnswered(returnUnAnsweredQuestions(props.questions, props.authedUser));

    setAnswered(
      returnAnsweredQuestions(props.users, props.questions, props.authedUser)
    );
  }, [props.questions, props.users, props.authedUser]);

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
