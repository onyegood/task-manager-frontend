import React from "react";
import { render } from "@testing-library/react";
import SwitchComponent from "./index";

test("renders learn react link", () => {
   const { getByText } = render(
        <SwitchComponent 
            name="userName"
            title="Status"
            publish={true}
            doSwitch={() => true}
        />
    );

    const title = getByText("Status");
    expect(title).toBeInTheDocument();
  });