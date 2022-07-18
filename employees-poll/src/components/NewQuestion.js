import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function NewQuestion() {
  return (
    <div>
      <Nav />
      <div className="App">
        <div>
          <h1>Would You Rather?</h1>
        </div>
        <ul
          style={{
            float: "left",
            // flex: "75%",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "left",
          }}
        >
          <li style={{ width: "400px" }}>
            <h4>
              <strong>
                <h2>Option: 1</h2>
              </strong>
              <input type="text" style={{ width: "100%", height: "30px" }} />
            </h4>
          </li>
          <li style={{ width: "400px" }}>
            <h4>
              <strong>
                <h2>Option: 2</h2>
              </strong>
              <input type="text" style={{ width: "100%", height: "30px" }} />
            </h4>
          </li>
        </ul>
        <div>
          <Link
            to="/home"
            style={{
              background: "#66BFBF",
              borderRadius: "10px",
              padding: "10px 100px",
            }}
          >
            {" "}
            <strong>Submit</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(NewQuestion);
