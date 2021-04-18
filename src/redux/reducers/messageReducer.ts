import { ERROR_MESSAGE, SUCCESS_MESSAGE, CLEAR_MESSAGE } from "../types";

const INITIAL_STATE = {
  message: "",
  success: false,
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
        success: false,
      };
    default:
      return state;
  }
};
