import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Form from "..";

test("renders learn react link", async() => {
  const mockStore = configureStore();
  const store = mockStore({
    data: [
      { name: 'a', height: 0, weight: 0, gender: "m", age: '' },
    ],
  });

  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  fireEvent.click(getByTestId("reset"));
  fireEvent.click(getByTestId("submit"));
  fireEvent.click(getByText("Add Record"));
  fireEvent.click(getByText("Reset"));
});