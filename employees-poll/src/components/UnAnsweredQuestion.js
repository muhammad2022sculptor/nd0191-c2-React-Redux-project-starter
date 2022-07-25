import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addQuestionAnswer } from "../actions/questions";
import Nav from "./Nav";

export const UnAnsweredQuestion = (props) => {
  const { question_id } = useParams();
  const [selectedOption, setSelectedOption] = React.useState("none");
  const navigate = useNavigate();

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
            <p>Asked By</p>
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
                Select :{"    "}
                <select
                  value={selectedOption}
                  id="options"
                  onChange={(e) => {
                    setSelectedOption(e.target.value);
                  }}
                >
                  <optgroup label="Choose Any">
                    <option value="none">choose</option>
                    <option value="optionOne">Option 1</option>
                    <option value="optionTwo">Option 2</option>
                  </optgroup>
                </select>
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
              <button
                id="submit-answer"
                onClick={() => {
                  if (selectedOption === "none")
                    alert("Please select an option!");
                  else {
                    props.dispatch(
                      addQuestionAnswer(question_id, selectedOption)
                    );
                    document.getElementById("submit-answer").disabled = true;
                    document.getElementById("submit-answer").innerText =
                      "SUBMITTING....";
                    setTimeout(() => {
                      navigate("/home");
                    }, 3000);
                  }
                }}
              >
                SUBMIT ANSWER?
              </button>
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

export default connect(mapStateToProps)(UnAnsweredQuestion);
