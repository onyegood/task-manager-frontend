import React from "react";
import "./Switch.scss";
interface Props {
  publish: boolean;
  name?: string;
  title?: string;
  doSwitch: any;
}

const SwitchComponent = ({ publish, name, title, doSwitch }: Props) => {
  return (
    <div className="switch_wrapper">
      {title && <label className="switch_title">{title}</label>}
      <label className="switch">
        <input
          type="checkbox"
          name={name}
          defaultChecked={publish}
          onClick={doSwitch}
        />
        <span className="slider round" title={title} />
      </label>
    </div>
  );
};

export default SwitchComponent;
