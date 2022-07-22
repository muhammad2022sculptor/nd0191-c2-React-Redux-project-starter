import {
  ADD_ANSWER,
  RECEIVE_QUESTIONS,
  SAVE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER:
      return {
        ...state,
        ...action.users,
        ...action.questions,
      };
    default:
      return state;
  }
}
