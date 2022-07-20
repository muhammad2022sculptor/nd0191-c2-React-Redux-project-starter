import { SET_SHOW_QUESTION_STATES } from "../actions/showquestionstates";

export default function showquestionstates(state = {}, action) {
  switch (action.type) {
    case SET_SHOW_QUESTION_STATES:
      return {
        ...state,
        answered: action.answered,
        unanswered: action.unanswered,
      };
    default:
      return state;
  }
}
