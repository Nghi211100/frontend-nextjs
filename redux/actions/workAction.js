import * as actionType from "../constants";
import { supabase } from "../../utils/supabaseClient";

export const getWorks = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.ALL_WORK_REQUEST });
    const { data } = await supabase.from("work").select("*");
    dispatch({
      type: actionType.ALL_WORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.ALL_WORK_FAIL,
      payload: "Error message",
    });
  }
};

export const updateStatus = (workId, valueComplete) => async (dispatch) => {
  try {
    const { data } = await supabase
      .from("work")
      .update({ complete: !valueComplete })
      .eq("id", workId);
    dispatch({
      type: actionType.UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.UPDATE_FAIL,
      payload: "Update fail!",
    });
  }
};
export const updateName = (workId, valueName) => async (dispatch) => {
  try {
    const { data } = await supabase
      .from("work")
      .update({ name: valueName })
      .eq("id", workId);
    dispatch({
      type: actionType.UPDATE_NAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.UPDATE_NAME_FAIL,
      payload: "Update fail!",
    });
  }
};

export const addNewWork = (valueName) => async (dispatch) => {
  try {
    const { data } = await supabase.from("work").insert([{ name: valueName }]);
    dispatch({
      type: actionType.ADD_WORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.ADD_WORK_FAIL,
      payload: "Add new fail!",
    });
  }
};
export const removeOneWork = (id) => async (dispatch) => {
  try {
    const { data } = await supabase.from("work").delete().eq("id", id);
    dispatch({
      type: actionType.REMOVE_WORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.REMOVE_WORK_FAIL,
      payload: "Delete fail!",
    });
  }
};
