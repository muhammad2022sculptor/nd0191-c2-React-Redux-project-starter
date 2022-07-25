import { getInitialData } from "../api/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser("none"));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
