import React from "react";
import "./Switch.scss";
interface Props {
  title?: string;
  name: string;
  handleChange: any;
  handleBlur: any;
  publish: boolean;
}

const FormikSwitchComponent = ({ title, handleChange, handleBlur, name, publish }: Props) => {
  return (
    <div className="">
      <div>{title && <label className="switch_title">{title}</label>}</div>
      <label className="switch">
        <input
          id={name}
          name={name}
          type="checkbox"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultChecked={publish}
        />
        <span className="slider round" title={title} />
      </label>
    </div>
  );
};

export default FormikSwitchComponent;
