import { useState } from "react";
import { Task } from "../../model/Task";
import { renderFilteredTasks } from "./renderFilteredTasks";

interface Props {
  data: Task[];
  handleDeleteDataFromServer: Function;
  handleUpdateDataFromServer: Function;
}

const TaskCard = ({
  data,
  handleDeleteDataFromServer,
  handleUpdateDataFromServer,
}: Props) => {
  const [status, setStatus] = useState("all");

  const onChange = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <div className="card" data-testid="taskCard">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-8" />
            <div className="col-sm-4 d-flx al-c jc-sb">
              <span className="small">Filter</span>
              <select
                className="form-control ml-2"
                onChange={onChange}
              >
                <option value="all">All</option>
                <option value="done">Completed</option>
                <option value="todo">Incomplete</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-3">
              {renderFilteredTasks(status, data).map((task: Task) => (
                <div className="card mb-3 hover" key={task.id}>
                  <div className="card-body p-3 d-flx flx-r jc-sb al-c mobile-view">
                    <div>
                      <span
                        className={
                          task.status
                            ? "badge badge-success"
                            : "badge badge-danger"
                        }
                      >
                        {task.status ? "Completed" : "Incomplete"}
                      </span>
                      <p className="mb-1"> {task.name} </p>
                      <p className="mb-0 small"><i className="ion-md-alarm" /> {task.date}</p>
                    </div>
                    {!task.status ? (
                      <div>
                        <button
                          onClick={() =>
                            handleUpdateDataFromServer(task, "done")
                          }
                          className="btn btn-sm btn-success mr-2"
                        >
                          <i className="ion-ios-checkmark-circle" /> Done
                        </button>
                        <button
                          onClick={() =>
                            handleUpdateDataFromServer(task, "update")
                          }
                          className="btn btn-sm btn-primary mr-2"
                        >
                          <i className="ion-ios-text" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteDataFromServer(task.id)}
                          className="btn btn-sm btn-danger"
                        >
                          <i className="ion-ios-close-circle" /> Delete
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDeleteDataFromServer(task.id)}
                        className="btn btn-sm btn-danger"
                      >
                        <i className="ion-ios-close-circle" /> Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
