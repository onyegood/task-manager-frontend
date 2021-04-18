import React from "react";
import { render } from "@testing-library/react";
import TaskCard from "./TaskCard";

const data = [{
  id: '1',
  name: "Build web application for Lagos state government",
  status: true,
  date: "20/10/2021"
}]

test("renders learn react link", () => {
  const handleDeleteDataFromServer = jest.fn();
  const handleUpdateDataFromServer = jest.fn();

  const { getByTestId, getByText } = render(
    <TaskCard
      data={data} 
      handleDeleteDataFromServer={handleDeleteDataFromServer} 
      handleUpdateDataFromServer={handleUpdateDataFromServer}
    />
  );

  const countCard = getByTestId("taskCard");
  expect(countCard).toBeVisible();

  const name = getByText("Build web application for Lagos state government");
  expect(name).toBeInTheDocument();

  const date = getByText("20/10/2021");
  expect(date).toBeInTheDocument();
});
