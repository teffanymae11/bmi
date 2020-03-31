import { AppState } from "./types";
import * as actionType from "./strings";

const initState: AppState = {
  records: []
};

const reducer = (state: AppState = initState, action: any) => {
  switch (action.type) {
    case actionType.ADD_RECORD:
      return {
        ...state,
        records: [...state.records, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
