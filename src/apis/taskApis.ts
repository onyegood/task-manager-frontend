import axios from 'axios';
import { Task } from '../model/Task';
import { BASE_URL } from './server-url';

const tasks = async () => {
  const response = await axios.get(`${BASE_URL}tasks`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const newTask = async ({ payload }: { payload: Task }) => {
  const response = await axios.post(`${BASE_URL}tasks`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const updateTask = async ({ id, payload }: { id: string, payload: Task }) => {
  const response = await axios.put(`${BASE_URL}tasks/${id}`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const deleteTask = async ({payload} :{payload: string}) => {
  const response = await axios.delete(`${BASE_URL}tasks/${payload}`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

export { tasks, newTask, updateTask, deleteTask };