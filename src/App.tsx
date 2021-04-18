import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FloatterButton from "./components/buttons/FloatterButton";
import ContentSection from "./layout/ContentSection";
import CountsSection from "./layout/CountsSection";
import WelcomeSection from "./layout/WelcomeSection";
import { Task } from "./model/Task";
import {
  deleteTaskRequest,
  fetchAllTaskRequest,
  updateTaskRequest,
} from "./redux/actions";

interface DefaultRootState {
  tasks: {
    tasks: Task[];
    loader: boolean;
  };
}

const App = () => {
  const [formMode, setFormMode] = useState(false);
  const [task, setTask] = useState({
    id: "",
    name: "",
    date: "",
    status: false,
  });

  const dispatch = useDispatch();

  const { tasks, loader } = useSelector(
    (state: DefaultRootState) => state.tasks
  );

  const handleFetchDataFromServer = async () => {
    await dispatch(fetchAllTaskRequest());
  };

  const handleDeleteDataFromServer = async (id: string) => {
    await dispatch(deleteTaskRequest(id));
  };

  const handleUpdateDataFromServer = async (payload: Task, action: string) => {
    if (action === "done") {
      const data = {
        id: payload.id,
        name: payload.name,
        date: payload.date,
        status: true,
      };
      dispatch(updateTaskRequest(payload.id, data));
    } else {
      setTask(payload);
      setFormMode(!formMode);
    }
  };

  useEffect(() => {
    handleFetchDataFromServer();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container fadein">
      <WelcomeSection />

      <CountsSection tasks={tasks} />

      <ContentSection
        formMode={formMode}
        task={task}
        setFormMode={setFormMode}
        loader={loader}
        tasks={tasks}
        handleDeleteDataFromServer={handleDeleteDataFromServer}
        handleUpdateDataFromServer={handleUpdateDataFromServer}
      />

      <FloatterButton
        formMode={formMode}
        setFormMode={setFormMode}
        setTask={setTask}
      />
    </div>
  );
};

export default App;
