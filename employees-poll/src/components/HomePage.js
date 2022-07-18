import { connect } from "react-redux";
import Nav from "./Nav";
import Questions from "./Questions";

function HomePage() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="questions">
        <Questions />
      </div>
    </>
  );
}

export default connect()(HomePage);
