import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));
import App from "./App";
import { _saveQuestion, _saveQuestionAnswer } from "./api/_DATA";

test("renders App", () => {
  render(
    <Provider store={store} dispatch={store.dispatch}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
});

test("Async test for _saveQuestion", async () => {
  const optionOneText = "Play";
  const optionTwoText = "Work";
  const author = "sarahedo";

  const formattedQuestion = await _saveQuestion({
    optionOneText,
    optionTwoText,
    author,
  });

  expect(formattedQuestion.author).toEqual(author);
  expect(formattedQuestion.optionOne.text).toEqual(optionOneText);
  expect(formattedQuestion.optionTwo.text).toEqual(optionTwoText);
});

test("Async test for _saveQuestion With wrong data passed", async () => {
  const optionOneText = "Play";
  const optionTwoText = "Work";
  await expect(
    _saveQuestion({
      optionOneText,
      optionTwoText,
    })
  ).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
});
test("Async test for _saveQuestionAnswer", async () => {
  const authedUser = "sarahedo";
  const qid = "vthrdm985a262al8qx3do";
  const answer = "optionTwo";

  return await expect(
    _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
  ).resolves.toBe(true);
});

test("Async test for _saveQuestionAnswer With wrong data passed", async () => {
  const authedUser = "sarahedo";
  const qid = "";
  const answer = "optionOne";

  await expect(
    _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
  ).rejects.toEqual("Please provide authedUser, qid, and answer");
});
