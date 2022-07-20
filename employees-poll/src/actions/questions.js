import { _saveQuestion } from "../api/_DATA";
import { updateUserQuestions } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestionAction(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function addQuestion(question) {
  return (dispatch, getState) => {
    return _saveQuestion(question).then((question) => {
      dispatch(addQuestionAction(question));
      const { authedUser } = getState();
      dispatch(updateUserQuestions(authedUser, question.id));
    });
  };
}
