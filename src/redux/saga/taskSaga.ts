import { call, put } from "redux-saga/effects";
import { toast } from 'react-toastify';
import {
  fetchAllTaskSuccess,
  fetchAllTaskFailed,
  createNewTaskSuccess,
  createNewTaskFailed,
  updateTaskSuccess,
  updateTaskFailed,
  deleteTaskSuccess,
  deleteTaskFailed,
} from "../actions";
import { tasks, newTask, updateTask, deleteTask } from "../../apis/taskApis";

export function* fetchAllTasksSaga(action: any) {
  try {
    //@ts-ignore
    const response = yield call(tasks, action);
    yield put(fetchAllTaskSuccess(response));
  } catch (err) {
    toast.error(err.response.data.errors[0].message);
    yield put(fetchAllTaskFailed(err.response.data.errors[0].message));
  }
}
export function* createNewTaskSage(action: any) {
  try {
    //@ts-ignore
    const response = yield call(newTask, action);
    yield put(createNewTaskSuccess(response));
    toast.success("Task created successfully");
  } catch (err) {
    toast.error(err.response.data.errors[0].message);
    yield put(createNewTaskFailed(err.response.data.errors[0].message));
  }
}
export function* updateTaskSaga(action: any) {
  try {
    //@ts-ignore
    const response = yield call(updateTask, action);
    yield put(updateTaskSuccess(response));
    toast.success("Task updated successfully");
  } catch (err) {
    toast.error(err.response.data.errors[0].message);
    yield put(updateTaskFailed(err.response.data.errors[0].message));
  }
}
export function* deleteTaskSaga(action: any) {
  try {
    //@ts-ignore
    const response = yield call(deleteTask, action);
    yield put(deleteTaskSuccess(response.id));
    toast.success("Task deleted successfully");
  } catch (err) {
    toast.error(err.response.data.errors[0].message);
    yield put(deleteTaskFailed(err.response.data.errors[0].message));
  }
}
