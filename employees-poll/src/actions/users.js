export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_ASKED_QUESTIONS = "UPDATE_ASKED_QUESTIONS";

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
