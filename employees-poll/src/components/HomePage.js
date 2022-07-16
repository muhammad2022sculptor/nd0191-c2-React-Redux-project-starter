import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function HomePage(props) {
  return (
    <>
      <div>HomePage</div>
      <div style={{ margin: "30px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#00ff00",
            padding: "2px 30px",
            borderRadius: "30px",
          }}
          onClick={() => {
            props.dispatch(setAuthedUser("none"));
          }}
        >
          Logout
        </Link>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(HomePage);
