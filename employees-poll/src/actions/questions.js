import { getInitialData } from "../api/api";
import { _saveQuestion, _saveQuestionAnswer } from "../api/_DATA";
import { receiveUsers, updateUserQuestions } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";

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

export function addQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      getInitialData().then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      });
    });
  };
}
