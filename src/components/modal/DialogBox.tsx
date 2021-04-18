import React from "react";
import "./scss/index.scss";
interface Props {
  open: boolean;
  setOpen: any;
  text: string;
  buttonText: string;
  onClick: any;
  happy?: boolean;
  sad?: boolean;
  action?: string;
  progressLoading?: boolean;
}

const DialogBox = ({
  open,
  setOpen,
  text,
  buttonText,
  onClick,
  happy,
  sad,
  progressLoading,
  action,
}: Props) => {
  return (
    <>
      {open && (
        <div id="modal-container">
          <div className="modal-box">
            <div className="box-header">
              <span></span>
              <i
                onClick={() => setOpen(!open)}
                className="ion-ios-close-circle-outline"
              />
            </div>
            <div className="dialog-box-container">
              {progressLoading ? (
                <p>Loading...</p>
              ) : action === "success" ? (
                <i className="ion-md-checkmark-circle-outline success-color fa-8x" />
              ) : (
                <>
                  <p>
                    {happy && (
                      <i className="ion-ios-happy success-color fa-2x" />
                    )}
                    {sad && <i className="ion-ios-sad icon" />}
                    <br />
                    {text}
                  </p>

                  <br />
                  <button
                    onClick={() => onClick()}
                    className={happy ? "btn btn-success btn-sm mr-3" : "btn btn-danger btn-sm mr-3"}
                  >
                    <i className="ion-md-checkmark-circle-outline" />{" "}
                    {buttonText}
                  </button>
                  <button
                    onClick={() => setOpen(!open)}
                    className={happy ? "btn btn-danger btn-sm mr-3" : "btn btn-success btn-sm mr-3"}
                  >
                    <i className="ion-ios-close-circle-outline" /> Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogBox;