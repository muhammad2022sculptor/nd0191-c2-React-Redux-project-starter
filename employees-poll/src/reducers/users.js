import {
  RECEIVE_USERS,
  UPDATE_ASKED_QUESTIONS,
  UPDATE_USER_ANSWERS,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_ASKED_QUESTIONS:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: [...state[action.user].questions, action.questionId],
        },
      };
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: Object.assign({}, state[action.user].answers, {
            [action.questionId]: action.answer,
          }),
        },
      };
    default:
      return state;
  }
}
