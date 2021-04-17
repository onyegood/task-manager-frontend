
import { call, put } from "redux-saga/effects";
import {
    fetchAllTaskSuccess,
    fetchAllTaskFailed,
    createNewTaskSuccess,
    createNewTaskFailed,
    updateTaskSuccess,
    updateTaskFailed,
    deleteTaskSuccess,
    deleteTaskFailed
} from "../actions";
import { 
  tasks, 
  newTask, 
  updateTask, 
  deleteTask 
} from '../../apis/taskApis';


export function* fetchAllTasksSaga(action: any) {
  try {
    //@ts-ignore
    const response = yield call(tasks, action);
    yield put(fetchAllTaskSuccess(response));
  } catch (err) {
    yield put(fetchAllTaskFailed(err.response.data.message));
  }
}
export function* createNewTaskSage(action: any) {
  try {
    //@ts-ignore
    const response = yield call(newTask, action);
    yield put(createNewTaskSuccess(response));
  } catch (err) {
    yield put(createNewTaskFailed(err.response.data.message));
  }
}
export function* updateTaskSaga(action: any) {
  try {
    //@ts-ignore
    const response = yield call(updateTask, action);
    yield put(updateTaskSuccess(response));
  } catch (err) {
    yield put(updateTaskFailed(err.response.data.message));
  }
}
export function* deleteTaskSaga(action: any) {
  try {
    //@ts-ignore
    const response = yield call(deleteTask, action);
    yield put(deleteTaskSuccess(response.id));
  } catch (err) {
    yield put(deleteTaskFailed(err.response.data.message));
  }
}