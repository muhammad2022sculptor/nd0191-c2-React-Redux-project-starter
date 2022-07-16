import { getInitialData } from "../api/api";
import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users }) => {
      dispatch(setAuthedUser("none"));
      dispatch(receiveUsers(users));
    });
  };
}
