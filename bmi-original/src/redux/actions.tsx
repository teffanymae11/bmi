import { PersonalData } from "../components/dashboard/types";
import * as actionType from "./strings";

export const addRecord = (data: PersonalData) => {
  return {
    type: actionType.ADD_RECORD,
    payload: data
  };
};
