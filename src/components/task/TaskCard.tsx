import { Task } from "../../model/Task";

interface Props {
    data: Task[];
    handleDeleteDataFromServer: Function;
    handleUpdateDataFromServer: Function;
}

const TaskCard = ({ 
    data, 
    handleDeleteDataFromServer, 
    handleUpdateDataFromServer
}: Props) => {
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 mt-3">
                            {data.map((task: Task) => <div className="card mb-3 hover" key={task.id}>
                                <div className="card-body p-3 d-flx flx-r jc-sb al-c mobile-view">
                                    <div>
                                        <span className={task.status ? "badge badge-success" : "badge badge-danger"}>
                                            {task.status ? "Completed" : "Incomplete"}
                                        </span>
                                        <p className="mb-1"> {task.name} </p>
                                        <p className="mb-0 small">{task.date}</p>
                                    </div>
                                    {!task.status ? (
                                        <div>
                                            <button
                                                onClick={() => handleUpdateDataFromServer(task, 'done')}
                                                className="btn btn-sm btn-success mr-2">
                                                <i className="ion-ios-checkmark-circle" /> Done
                                            </button>
                                            <button
                                                onClick={() => handleUpdateDataFromServer(task, 'update')}
                                                className="btn btn-sm btn-primary mr-2">
                                                <i className="ion-ios-text" /> Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteDataFromServer(task.id)}
                                                className="btn btn-sm btn-danger">
                                                <i className="ion-ios-close-circle" /> Delete 
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleDeleteDataFromServer(task.id)}
                                            className="btn btn-sm btn-danger">
                                            <i className="ion-ios-close-circle" /> Delete
                                        </button>
                                    )
                                    }
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskCard;