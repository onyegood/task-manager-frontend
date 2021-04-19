import React from "react";
import ProgressLoader from "../components/loader/progress-loader";
import TaskCard from "../components/task/TaskCard";
import TaskForm from "../components/task/TaskForm";
import { Task } from "../model/Task";

interface Props {
  formMode: boolean;
  task: Task;
  setFormMode: Function;
  loader: boolean;
  tasks: Task[];
  handleDeleteDataFromServer: Function;
  handleUpdateDataFromServer: Function;
}

const ContentSection = ({
  formMode,
  task,
  setFormMode,
  loader,
  tasks,
  handleDeleteDataFromServer,
  handleUpdateDataFromServer,
}: Props) => (
  <>
    {formMode && (
      <div className="row">
        <div className="col-md-7 mt-4 mx-auto">
          <span className="small cursor-pointer" onClick={() => setFormMode(!formMode)}>
            <i className="ion-md-arrow-back" /> Go Back
          </span>
        </div>
      </div>
    )}
    <div className="row">
      {formMode && (
        <div className="col-md-7 mt-4 mx-auto fadein">
          <TaskForm task={task} setFormMode={setFormMode} />
        </div>
      )}

      {!formMode && (
        <div className="col-md-7 mt-4 mx-auto fadein">
          {loader ? (
            <div className="col-md-2 mx-auto">
              <ProgressLoader />
            </div>
          ) : tasks.length > 0 ? (
            <TaskCard
              data={tasks}
              handleDeleteDataFromServer={handleDeleteDataFromServer}
              handleUpdateDataFromServer={handleUpdateDataFromServer}
            />
          ) : (
            <div className="col-sm-6 text-center mx-auto empty-list mt-4 ">
              <i className="ion-md-happy text-success" />
              <p>
                You have not add your todo list, please use the button at the bottom right conner to add new tasks.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  </>
);

export default ContentSection;
