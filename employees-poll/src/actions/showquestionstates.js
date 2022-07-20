export const SET_SHOW_QUESTION_STATES = "SET_SHOW_QUESTION_STATES";

export function setShowQuestionStates(answered, unanswered) {
  return {
    type: SET_SHOW_QUESTION_STATES,
    answered,
    unanswered,
  };
}
