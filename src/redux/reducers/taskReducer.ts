import { Task } from "../../model/Task";
import {
    CREATE_NEW_TASK_FAILED,
    CREATE_NEW_TASK_REQUEST,
    CREATE_NEW_TASK_SUCCESS,
    DELETE_TASK_FAILED,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    FETCH_ALL_TASKS_FAILED,
    FETCH_ALL_TASKS_REQUEST,
    FETCH_ALL_TASKS_SUCCESS,
    UPDATE_TASK_FAILED,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS
} from "../types";

const INITIAL_STATE = {
    tasks: [],
    loader: false
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CREATE_NEW_TASK_FAILED:
        case DELETE_TASK_FAILED:
        case FETCH_ALL_TASKS_FAILED:
        case UPDATE_TASK_FAILED:
            return {
                ...state,
                loader: false
            };
        case CREATE_NEW_TASK_REQUEST:
        case DELETE_TASK_REQUEST:
        case FETCH_ALL_TASKS_REQUEST:
        case UPDATE_TASK_REQUEST:
            return {
                ...state,
                loader: true
            };
        case CREATE_NEW_TASK_SUCCESS:
            return {
                ...state,
                tasks: [
                    ...state.tasks.concat(action.payload)
                ],
                loader: false,
            };
        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map((task: Task) => {
                        if (task.id === action.payload.id) {
                            return {
                                ...task,
                                ...action.payload
                            };
                        } else {
                            return task;
                        }
                    })
                ],
                loader: false,
            };
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter((task: Task) => task.id !== action.payload)
                ],
                loader: false,
            };
        case FETCH_ALL_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                loader: false,
            };
        default:
            return state;
    }
}