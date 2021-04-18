import React from "react";
import { render } from "@testing-library/react";
import FormikSwitchComponent from "./FormikSwitchComponent";

test("renders swith", () => {
   const { getByText } = render(
        <FormikSwitchComponent 
            name="userName"
            title="Status"
            publish={true}
            handleChange={() => true}
            handleBlur={() => true}
            
        />
    );

    const title = getByText("Status");
    expect(title).toBeInTheDocument();
  });