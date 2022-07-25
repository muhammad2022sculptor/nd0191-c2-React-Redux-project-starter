import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion";
import NotFound from "./NotFound";

export const CheckQuestion = (props) => {
  const { question_id } = useParams();

  if (props.answered.includes(question_id)) return <AnsweredQuestion />;
  else if (props.unanswered.includes(question_id))
    return <UnAnsweredQuestion />;
  else return <NotFound />;
};

const mapStateToProps = (state) => ({
  unanswered: state.showquestionstates["unanswered"],
  answered: state.showquestionstates["answered"],
});

export default connect(mapStateToProps)(CheckQuestion);
