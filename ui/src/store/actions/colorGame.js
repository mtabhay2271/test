import * as api from "../../services/api/colorGame";
import { FETCH_CGR_ALL } from "../actions";

export const getAllColorGameResult = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllCGR();
    const action = {
      type: FETCH_CGR_ALL,
      payload: data?.data?.length ? data?.data : [],
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
