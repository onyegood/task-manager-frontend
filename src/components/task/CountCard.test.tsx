import React from "react";
import { render } from "@testing-library/react";
import CountCard from "./CountCard";

test("renders learn react link", () => {
  const { getByTestId, getByText } = render(
    <CountCard
      title="total tasks"
      count={200}
      bgColor="bg-success"
      icon="ion-ios-home"
      iconColor="bg-success"
    />
  );

  const countCard = getByTestId("total tasks");
  expect(countCard).toBeVisible();

  const title = getByText("total tasks");
  expect(title).toBeInTheDocument();

  const count = getByText(200);
  expect(count).toBeInTheDocument();
});
