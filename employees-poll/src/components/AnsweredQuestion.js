import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

export const AnsweredQuestion = (props) => {
  const { question_id } = useParams();
  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedOptionTotalVotes, setSelectedOptionTotalVotes] =
    React.useState(0);

  React.useEffect(() => {
    setSelectedOption(props.users[props.authedUser].answers[question_id]);
    setSelectedOptionTotalVotes(
      selectedOption === "optionTwo"
        ? [props.questions[question_id].optionOne.votes].length
        : [props.questions[question_id].optionTwo.votes].length
    );
  }, []);

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="App">
        <div
          style={{
            margin: "30px 0px",
          }}
        >
          <div style={{ flex: "25%" }}>
            <img
              className="avatar"
              src={props.users[props.questions[question_id].author].avatarURL}
              alt="yeah"
            />
            <p
              style={{
                margin: "0px 20px 0px 5px",
                padding: "15px 15px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "lightblue",
              }}
            >
              <strong>Name:</strong>
              {"    "}
              {props.users[props.questions[question_id].author].name}
            </p>
          </div>
          <div>
            <p
              style={{
                margin: "0px 20px 0px 5px",
                padding: "15px 15px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "skyblue",
              }}
            >
              <strong>Option One :</strong>
              {"    "}
              {props.questions[question_id].optionOne["text"]}
            </p>
            <p
              style={{
                margin: "0px 20px 0px 5px",
                padding: "15px 15px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "skyblue",
              }}
            >
              <strong>Option Two :</strong>
              {"    "}
              {props.questions[question_id].optionTwo["text"]}
            </p>
            <p
              style={{
                margin: "0px 20px 0px 5px",
                padding: "15px 15px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "green",
              }}
            >
              <strong>
                Selected :{"    "}
                {selectedOption && selectedOption.toUpperCase()}
              </strong>
            </p>
            <p
              style={{
                margin: "0px 20px 0px 5px",
                padding: "15px 15px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "green",
              }}
            >
              <strong>
                Number of People Who Voted :{"    "}
                {selectedOptionTotalVotes}
              </strong>
            </p>
            <p
              style={{
                margin: "0px 20px 0px 5px",
                padding: "15px 15px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "green",
              }}
            >
              <strong>
                Percentage of Votes :{"    "}
                {(selectedOptionTotalVotes / Object.keys(props.users).length) *
                  100}
                {"%"}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
  answered: state.answered,
  unanswered: state.unanswered,
});

export default connect(mapStateToProps)(AnsweredQuestion);
