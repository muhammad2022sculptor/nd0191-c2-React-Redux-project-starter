import React from "react";
import { connect } from "react-redux";
import {
  returnAnsweredQuestions,
  returnUnAnsweredQuestions,
} from "../api/helper";
import { useParams } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion";
import NotFound from "./NotFound";

export const CheckQuestion = (props) => {
  const { question_id } = useParams();

  const [unAnswered, setUnAnswered] = React.useState([]);
  const [Answered, setAnswered] = React.useState([]);

  React.useEffect(() => {
    setUnAnswered(returnUnAnsweredQuestions(props.questions, props.authedUser));

    setAnswered(
      returnAnsweredQuestions(props.users, props.questions, props.authedUser)
    );
  }, [props.questions, props.users, props.authedUser]);

  if (Answered.includes(question_id)) return <AnsweredQuestion />;
  else if (unAnswered.includes(question_id)) return <UnAnsweredQuestion />;
  else return <NotFound />;
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(CheckQuestion);
