import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const welcome = screen.getByText(/Welcome to TODO Pro/i);
  const bestTodo = screen.getByText(/The best app for your todo list/i);

  expect(bestTodo).toBeInTheDocument();
  expect(welcome).toBeInTheDocument();
});
