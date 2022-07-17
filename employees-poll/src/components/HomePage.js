import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import Nav from "./Nav";
import Questions from "./Questions";

function HomePage(props) {
  return (
    <div>
      <Nav />
      <div style={{ margin: "30px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#0055ff",
            padding: "2px 30px",
            borderRadius: "30px",
          }}
          onClick={() => {
            if (props.authedUser === "none") {
              alert("Please Select a User First!");
            }
            props.dispatch(setAuthedUser("none"));
          }}
        >
          Logout
        </Link>
      </div>
      <div>
        <Questions />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(HomePage);
