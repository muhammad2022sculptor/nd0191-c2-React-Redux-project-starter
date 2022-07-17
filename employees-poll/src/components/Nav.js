import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
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
        <li>{props.users[props.authedUser].name}</li>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Nav);
