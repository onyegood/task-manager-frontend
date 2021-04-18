import React from "react";
import "./scss/CountCard.scss";

interface Props {
  title: string;
  bgColor: string;
  icon?: string;
  iconColor?: string;
  count: number;
}
const CountCard = ({ title, count, bgColor, icon, iconColor }: Props) => {
  return (
    <div className="col-sm-4 mb-2" data-testid={title}>
      <div className={`card ${bgColor}`}>
        <div className="card-body p-2">
          <div className="d-flx jc-sb al-c">
            <h1 className="text-white">{count}</h1>
            <div className="icon-box">
              <i className={`${icon} ${iconColor}`} />
            </div>
          </div>
          <p className="small mb-1 text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
