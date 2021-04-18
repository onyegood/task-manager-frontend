import { ERROR_MESSAGE } from "../redux/types";

export const errorHandler = (error: any) => async (dispatch: any) => {
  if (error.response !== undefined) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: {
        success: false,
        message: error.response.data.message,
      },
    });
  } else {
    dispatch({
      type: ERROR_MESSAGE,
      payload: {
        success: false,
        message: `${error.message}. please check your internet connect.`,
      },
    });
  }
};
