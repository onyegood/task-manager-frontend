import { Task } from "../../model/Task";

export const renderFilteredTasks = (status: string, data: Task[]) => {
    let filteredData = data;

    if (status === 'done') {
      filteredData = data.filter(x => x.status === true)
    }else if(status === 'todo'){
      filteredData = data.filter(x => x.status === false)
    }else {
      filteredData = data
    }

    return filteredData;
  }