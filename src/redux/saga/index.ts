import { takeLatest } from "redux-saga/effects";
import {
  CREATE_NEW_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  FETCH_ALL_TASKS_REQUEST
} from "../types";
import { 
  fetchAllTasksSaga, 
  createNewTaskSage, 
  updateTaskSaga, 
  deleteTaskSaga 
} from "./taskSaga";

export default function* rootSaga() {
  yield takeLatest(FETCH_ALL_TASKS_REQUEST, fetchAllTasksSaga);
  yield takeLatest(CREATE_NEW_TASK_REQUEST, createNewTaskSage);
  yield takeLatest(UPDATE_TASK_REQUEST, updateTaskSaga);
  yield takeLatest(DELETE_TASK_REQUEST, deleteTaskSaga);
}