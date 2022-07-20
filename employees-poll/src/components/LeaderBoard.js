import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

function LeaderBoard(props) {
  return (
    <div>
      <Nav />
      <div className="App">
        <div>
          {Object.keys(props.users).map((user) => (
            <ul
              style={{
                flex: "100%",
                display: "flex",
                flexDirection: "row",
                border: "2px solid gray",
                borderRadius: "10px",
                background: "#364F6B",
              }}
              key={props.users[user].id}
            >
              <li>
                <img
                  className="avatar"
                  src={props.users[user].avatarURL}
                  alt="avatar"
                />
              </li>
              <li>{props.users[user].name}</li>
              <li>
                {Object.keys(props.users[user].questions).length} questions
                asked
              </li>
              <li>
                {Object.keys(props.users[user].answers).length} questions
                answered
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
