import * as actionType from "../strings";
import { PersonalData } from "../../components/dashboard/types";

const fromLocalDataJSON = localStorage.getItem("data");

const initState: PersonalData[] = fromLocalDataJSON == null ? [] : JSON.parse(fromLocalDataJSON);

const reduce = (state: PersonalData[] = initState, action: any) => {
  switch (action.type) {
    case actionType.SUBMIT_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

const data = (state: PersonalData[] = initState, action: any) => {
  const newState: PersonalData[] = reduce(state, action);
  localStorage.setItem("data", JSON.stringify(newState));
  return newState;
}

export default data;
