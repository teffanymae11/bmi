import { AppState } from "./types";
import * as actionType from "./strings";

const fromLocalDataJSON = localStorage.getItem("data");

const initState: AppState = fromLocalDataJSON == null ? {
  data: []
} : JSON.parse(fromLocalDataJSON);

const reduce = (state: AppState = initState, action: any) => {
  switch (action.type) {
    case actionType.ADD_RECORD:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};

const reducer = (state: AppState = initState, action: any) => {
  const newState: AppState = reduce(state, action);
  localStorage.setItem("data", JSON.stringify(newState));
  return newState;
}

export default reducer;
