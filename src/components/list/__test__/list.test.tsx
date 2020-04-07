import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import List from "..";

test("renders learn react link", () => {
  const mockStore = configureStore();
  const store = mockStore({
    data: [
      { name: "clickThis", height: 5, weight: 5, gender: "m", age: "19" },
      { name: "sample", height: 5, weight: 5, gender: "f", age: "20" },
      { name: "sample", height: 5, weight: 5, gender: "f", age: "17" },
      { name: "sample", height: 5, weight: 5, gender: "m", age: "30" },
      { name: "sample", height: 5, weight: 5, gender: "m", age: "17" },
      { name: "sample", height: 5, weight: 5, gender: "m", age: "18" },
      { name: "sample", height: 5, weight: 5, gender: "f", age: "18" },
    ],
  });

  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  fireEvent.click(getByTestId("testMe"));
  fireEvent.click(getByText("Assending"));
  fireEvent.click(getByText("Descending"));
  fireEvent.click(getByText("Assending"));
  fireEvent.click(getByText("Descending"));
  fireEvent.click(getByText("M"));
  fireEvent.click(getByText("F"));
  fireEvent.click(getByText("Minor"));
  fireEvent.click(getByText("Adult"));
});
