import React from "react";
import { connect } from "react-redux";

function Questions(props) {
  const [answered, setAnswered] = React.useState([]);
  const [unAnswered, setUnAnswered] = React.useState([]);

  return (
    <div>
      {Object.keys(props.questions).map((question) => {
        // console.log(props.)
        let time = new Date(props.questions[question].timestamp);
        console.log(time.toGMTString());
        return (
          <div
            style={{
              background: "#0F4C75",
              borderRadius: "10px",
              margin: "10px 600px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: "75%", textAlign: "left", margin: "10px" }}>
                <div>{props.users[props.questions[question].author].name}</div>
                <div>{time.toGMTString()}</div>
              </div>
              <div style={{ flex: "25%" }}>
                <button
                  style={{
                    width: "90%",
                    height: "70%",
                    marginTop: "12.5px",
                    borderRadius: "10px",
                    backgroundColor: "#11999E",
                    color: "#fff",
                  }}
                >
                  <strong>Show Question</strong>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Questions);
