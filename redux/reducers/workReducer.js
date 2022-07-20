import * as actionType from "../constants";

export const allWorkReducer = (state = { works: [] }, action) => {
  switch (action.type) {
    case actionType.ALL_WORK_REQUEST: {
      return { loading: true };
    }
    case actionType.ALL_WORK_SUCCESS:
      return {
        loading: false,
        works: action.payload,
      };

    case actionType.ALL_WORK_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateReducer = (state = { works: [] }, action) => {
  switch (action.type) {
    case actionType.UPDATE_SUCCESS:
      return {
        works: action.payload,
        state,
      };

    case actionType.UPDATE_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export const updateNameReducer = (state = { works: [] }, action) => {
  switch (action.type) {
    case actionType.UPDATE_NAME_SUCCESS:
      return {
        works: action.payload,
        state,
      };

    case actionType.UPDATE_NAME_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export const addWorkReducer = (state = { works: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_WORK_SUCCESS:
      return {
        works: action.payload,
        state,
      };

    case actionType.ADD_WORK_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export const removeWorkReducer = (state = { works: [] }, action) => {
  switch (action.type) {
    case actionType.REMOVE_WORK_SUCCESS:
      return {
        message: action.payload,
        state,
      };

    case actionType.REMOVE_WORK_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
