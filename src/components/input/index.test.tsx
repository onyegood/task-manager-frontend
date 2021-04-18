import React from "react";
import { render } from "@testing-library/react";
import InputField from "./index";

test("renders learn react link", () => {
   const { getByTestId, getByLabelText, getByText } = render(
        <InputField 
            className="form-control"
            value="Goodnews"
            placeholder="Enter user name"
            type="text"
            id="userName"
            name="userName"
            title="First name"
            error='First name is required' 
            touched={true}
            handleChange={() => true}
            handleBlur={() => true}
        />
    );

    const title = getByText("First name");
    const error = getByTestId(/First name is required/i);
    const titleLabelText = getByLabelText(/First Name/i);

    expect(titleLabelText).toBeVisible();
    expect(error).not.toBeNull();
    expect(title).toBeInTheDocument();
  });