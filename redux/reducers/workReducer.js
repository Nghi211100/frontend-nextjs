import * as actionType from "../constants";

export const workReducer = (state = { works: [] }, action) => {
  switch (action.type) {
    case actionType.ALL_WORK_REQUEST:
      return { loading: true };

    case actionType.ALL_WORK_SUCCESS:
      return {
        loading: false,
        works: action.payload,
      };

    case actionType.ALL_WORK_FAIL:
      return {
        error: action.payload,
      };
    case actionType.UPDATE_SUCCESS:
      var items = action.payload;
      var item;
      items.map((e) => (item = e));
      return {
        ...state,
        works: state.works.map((x) => (x.id === item.id ? item : x)),
      };
    case actionType.UPDATE_FAIL:
      return {
        error: action.payload,
      };
    case actionType.UPDATE_NAME_SUCCESS:
      var items = action.payload;
      var item;
      items.map((e) => (item = e));
      return {
        ...state,
        works: state.works.map((x) => (x.id === item.id ? item : x)),
      };

    case actionType.UPDATE_NAME_FAIL:
      return {
        error: action.payload,
      };
    case actionType.ADD_WORK_SUCCESS:
      var items = action.payload;
      var item;
      items.map((e) => (item = e));
      return {
        ...state,
        works: [...state.works, item],
      };

    case actionType.ADD_WORK_FAIL:
      return {
        error: action.payload,
      };
    case actionType.REMOVE_WORK_SUCCESS:
      var items = action.payload;
      var item;
      items.map((e) => (item = e));
      return {
        works: state.works.filter((x) => x.id !== item.id),
      };

    case actionType.REMOVE_WORK_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
