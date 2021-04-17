import { Error } from "../../model/Error";
import { Task } from "../../model/Task";
import { 
    CREATE_NEW_TASK_SUCCESS, 
    FETCH_ALL_TASKS_SUCCESS, 
    UPDATE_TASK_SUCCESS, 
    DELETE_TASK_SUCCESS, 
    FETCH_ALL_TASKS_REQUEST, 
    CREATE_NEW_TASK_REQUEST,
    UPDATE_TASK_REQUEST,
    DELETE_TASK_REQUEST,
    FETCH_ALL_TASKS_FAILED,
    CREATE_NEW_TASK_FAILED,
    UPDATE_TASK_FAILED,
    DELETE_TASK_FAILED
} from "../types";

// Read Actions
export const fetchAllTaskRequest = () => ({
    type: FETCH_ALL_TASKS_REQUEST
});

export const fetchAllTaskSuccess = (payload: Task[]) => ({
    type: FETCH_ALL_TASKS_SUCCESS,
    payload
});

export const fetchAllTaskFailed = (payload: Error) => ({
    type: FETCH_ALL_TASKS_FAILED,
    payload
});

// Create Actions
export const createNewTaskRequest = (payload: Task) => ({
    type: CREATE_NEW_TASK_REQUEST,
    payload
});

export const createNewTaskSuccess = (payload: Task) => ({
    type: CREATE_NEW_TASK_SUCCESS,
    payload
});

export const createNewTaskFailed = (payload: Error) => ({
    type: CREATE_NEW_TASK_FAILED,
    payload
});

// Update Actions
export const updateTaskRequest = (id: string, payload: Task) => ({
    type: UPDATE_TASK_REQUEST,
    id,
    payload
});

export const updateTaskSuccess = (payload: Task) => ({
    type: UPDATE_TASK_SUCCESS,
    payload
});

export const updateTaskFailed = (payload: Error) => ({
    type: UPDATE_TASK_FAILED,
    payload
});

// Delete Actions
export const deleteTaskRequest = (payload: string) => ({
    type: DELETE_TASK_REQUEST,
    payload
});

export const deleteTaskSuccess = (payload: Task) => ({
    type: DELETE_TASK_SUCCESS,
    payload
});

export const deleteTaskFailed = (payload: Error) => ({
    type: DELETE_TASK_FAILED,
    payload
});