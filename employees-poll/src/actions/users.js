export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_ASKED_QUESTIONS = "UPDATE_ASKED_QUESTIONS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateUserQuestions(user, questionId) {
  return {
    type: UPDATE_ASKED_QUESTIONS,
    user,
    questionId,
  };
}

export function updateUserAnswers(user, questionId, answer) {
  return {
    type: UPDATE_USER_ANSWERS,
    user,
    questionId,
    answer,
  };
}
