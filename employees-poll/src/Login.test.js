import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
import LoginPage from "./components/LoginPage";

test("renders Login Page (Matching with the snapshot)", () => {
  const component = render(
    <Provider store={store} dispatch={store.dispatch}>
      <Router>
        <LoginPage />
      </Router>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});

test("renders Login Page and Checks Input Dropdown Rendered?", () => {
  const component = render(
    <Provider store={store} dispatch={store.dispatch}>
      <Router>
        <LoginPage />
      </Router>
    </Provider>
  );

  var username = component.getByTestId("user-name-input");
  expect(username).toBeInTheDocument();
});

test("renders Login Page and Checks Input Dropdown Value?", () => {
  const component = render(
    <Provider store={store} dispatch={store.dispatch}>
      <Router>
        <LoginPage />
      </Router>
    </Provider>
  );

  var username = component.getByTestId("user-name-input");
  expect(username).toHaveValue("none");
});

test("Testing the path to be '/' ", () => {
  expect(global.window.location.pathname).toEqual("/");
});

test("renders Login Page and Sets Input Dropdown Value?", () => {
  const component = render(
    <Provider store={store} dispatch={store.dispatch}>
      <Router>
        <LoginPage />
      </Router>
    </Provider>
  );

  let options = component.getAllByTestId("select-option");
  fireEvent.change(options[0], { target: { value: "sarahedo" } });
  expect(options[0].selected).toBeTruthy();
  expect(options[0]).toHaveValue("sarahedo");
});

test("Performs changes and clicks login", () => {
  const component = render(
    <Provider store={store} dispatch={store.dispatch}>
      <Router>
        <LoginPage />
      </Router>
    </Provider>
  );
  fireEvent.click(component.getByTestId("login-button"));
  expect(global.window.location.pathname).toEqual("/home");
});
