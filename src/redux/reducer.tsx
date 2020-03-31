import { AppState } from "./types";
import * as actionType from "./strings";

const initState: AppState = {
  data: []
};

const reducer = (state: AppState = initState, action: any) => {
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

export default reducer;
