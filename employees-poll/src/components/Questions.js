import React from "react";
import { connect } from "react-redux";

function Questions(props) {
  const [unAnswered, setUnAnswered] = React.useState([]);

  React.useEffect(() => {
    setUnAnswered(
      Object.keys(props.questions).filter((question) => {
        let optionOne = props.questions[question].optionOne["votes"];
        let optionTwo = props.questions[question].optionTwo["votes"];
        return (
          !(
            optionOne.includes(props.authedUser) ||
            optionTwo.includes(props.authedUser)
          ) && props.questions[question].id
        );

        // console.log("UnAnswered Questions : => ", unAnswered);

        // console.log(
        //   "id : ",
        //   props.questions[question].id,
        //   "\nOption 1 : ",
        //   optionOne,
        //   "\nIncludes authedUser ? =>",
        //   optionOne.includes(props.authedUser),
        //   "\nOption 2 : ",
        //   optionTwo,
        //   "\nIncludes authedUser ? =>",
        //   optionTwo.includes(props.authedUser),
        //   "\nIs it not included any of the two : ",
        //   !(
        //     optionOne.includes(props.authedUser) ||
        //     optionTwo.includes(props.authedUser)
        //   )
        //     ? "Yes"
        //     : "No"
        // );
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
            <div
              style={{
                background: "#0F4C75",
                borderRadius: "10px",
                margin: "20px 20px",
              }}
              key={time}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flex: "75%", textAlign: "left", margin: "10px" }}>
                  <div>
                    <p>{props.questions[question].id}</p>
                    <p>
                      Option One: {props.questions[question].optionOne["text"]}
                    </p>
                    <p>
                      Option Two: {props.questions[question].optionTwo["text"]}
                    </p>
                    <p>
                      Selected:{" "}
                      {props.users[props.authedUser].answers[question]}
                    </p>
                    {props.users[props.questions[question].author].name}
                  </div>
                  <div>{time.toGMTString()}</div>
                </div>
                <div style={{ flex: "25%" }}>
                  <button
                    style={{
                      width: "90%",
                      height: "70%",
                      marginTop: "10px",
                      borderRadius: "10px",
                      backgroundColor: "#11999E",
                      color: "#fff",
                    }}
                  >
                    <strong>New Question</strong>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Answered Questions</h1>
        {Object.keys(props.users).map((user) => {
          // console.log(user);
          // console.log(props.authedUser);
          // console.log(user, "!==", props.authedUser, user !== props.authedUser);
          if (
            user === props.authedUser &&
            Object.keys(props.users[user].answers).length > 0
          )
            // return console.log(Object.keys(props.users[user].answers));
            return Object.keys(props.users[user].answers).map((question) => {
              let time = new Date(props.questions[question].timestamp);
              return (
                <div
                  style={{
                    background: "#0F4C75",
                    borderRadius: "10px",
                    margin: "20px 20px",
                  }}
                  key={time}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ flex: "75%", textAlign: "left", margin: "10px" }}
                    >
                      <div>
                        <p>{props.questions[question].id}</p>
                        <p>
                          Option One:{" "}
                          {props.questions[question].optionOne["text"]}
                        </p>
                        <p>
                          Option Two:{" "}
                          {props.questions[question].optionTwo["text"]}
                        </p>
                        <p>
                          Selected:{" "}
                          {props.users[props.authedUser].answers[question]}
                        </p>
                        {props.users[props.questions[question].author].name}
                      </div>
                      <div>{time.toGMTString()}</div>
                    </div>
                    <div style={{ flex: "25%" }}>
                      <button
                        style={{
                          width: "90%",
                          height: "70%",
                          marginTop: "10px",
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
