import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <div
          style={{
            flex: "75%",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "left",
          }}
        >
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/add">Ask?</Link>
            </li>
          </ul>
        </div>
        <div
          style={{
            flex: "25%",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "right",
          }}
        >
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
                  padding: "20px 30px",
                  borderRadius: "0px 10px 10px 0px",
                  onHover: {
                    color: "#000",
                  },
                }}
                onClick={() => {
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
