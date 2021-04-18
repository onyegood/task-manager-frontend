import React from "react";

interface PropData {
  id: string;
  type: string;
  className: string;
  placeholder: string;
  name: string;
  title: string;
  error?: string;
  value: string;
  touched?: boolean;
  handleChange: any;
  handleBlur: any;
}
const InputField = (props: PropData) => {
  const { name, title, error, touched, handleChange, handleBlur } = props;
  return (
    <>
      <label id={name} htmlFor={title} data-testid={`${name}Title`}>
        {title}
      </label>
      <input
        aria-labelledby={name}
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched && (
        <p className="small text-danger mt-2" data-testid={error}>
          {error}
        </p>
      )}
    </>
  );
};

export default InputField;
