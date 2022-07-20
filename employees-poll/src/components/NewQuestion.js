import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../actions/questions";
import Nav from "./Nav";

function NewQuestion(props) {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = React.useState("");
  const [optionTwo, setOptionTwo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOne.length > 5 && optionTwo.length > 5) {
      alert(`${optionOne} ${optionTwo}`);
      props.dispatch(
        addQuestion({
          optionOneText: optionOne,
          optionTwoText: optionTwo,
          author: props.authedUser,
        })
      );
      navigate("/home");
    } else alert("Please enter more information in the textfields");
  };

  return (
    <div>
      <Nav />
      <div className="App">
        <div style={{ marginTop: "150px" }}>
          <h1>Would You Rather?</h1>
          <h3
            style={{
              fontFamily: "Indie Flower",
              fontStyle: "oblique",
              color: "#d1d1d1",
            }}
          >
            create a new poll
          </h3>
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "left",
            margin: "50px 0px",
          }}
        >
          <li
            style={{
              width: "100%",
            }}
          >
            <strong>
              <h3
                style={{
                  fontSize: "20px",
                  border: "1px solid gray",
                  background: "#F6F6F6",
                  color: "black",
                  width: "100px",
                  height: "32.5px",
                }}
              >
                Option: 1
              </h3>
            </strong>
            <input
              type="text"
              name="optionOne"
              style={{
                width: "100%",
                height: "30px",
                fontSize: "30px",
                fontFamily: "Helvetica",
              }}
              onChange={(e) => setOptionOne(e.target.value)}
            />
          </li>
          <li
            style={{
              width: "100%",
            }}
          >
            <strong>
              <h3
                style={{
                  fontSize: "20px",
                  border: "1px solid gray",
                  background: "#F6F6F6",
                  color: "black",
                  width: "100px",
                  height: "32.5px",
                }}
              >
                Option: 2
              </h3>
            </strong>
            <input
              type="text"
              name="optionTwo"
              style={{
                width: "100%",
                height: "30px",
                fontSize: "30px",
                fontFamily: "Helvetica",
              }}
              onChange={(e) => setOptionTwo(e.target.value)}
            />
          </li>
        </ul>
        <div style={{ margin: "40px 0px" }}>
          <button
            style={{
              background: "#66BFBF",
              borderRadius: "10px",
              padding: "10px 100px",
              fontSize: "20px",
            }}
            onClick={handleSubmit}
          >
            {" "}
            <strong>Submit</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});

export default connect(mapStateToProps)(NewQuestion);
