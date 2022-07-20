import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import showquestionstates from "./showquestionstates";

export default combineReducers({
  users,
  questions,
  authedUser,
  showquestionstates,
});
