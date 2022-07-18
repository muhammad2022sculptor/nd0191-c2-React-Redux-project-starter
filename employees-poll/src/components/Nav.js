import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <div style={{ flex: "75%", textAlign: "left" }}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/new">Ask New Question?</Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: "25%" }}>
          <ul>
            <li style={{ color: "white" }}>
              {props.users[props.authedUser].name}
            </li>
            <li>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#991122",
                  padding: "18px 30px",
                  borderRadius: "2px",
                  onHover: {
                    color: "#000",
                  },
                }}
                onClick={() => {
                  if (props.authedUser === "none") {
                    alert("Please Select a User First!");
                  }
                  props.dispatch(setAuthedUser("none"));
                }}
              >
                <strong>Logout</strong>
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Nav);
