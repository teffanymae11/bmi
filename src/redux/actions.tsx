import { PersonalData } from "../components/dashboard/types";
import * as actionType from "./strings";

export const addRecord = (newPersonalData: PersonalData) => {
  return {
    type: actionType.ADD_RECORD,
    payload: newPersonalData
  };
};

export const resetData = () => {
  return {
    type: actionType.RESET_DATA
  };
};

export const displayData = (val:PersonalData) => {
  return {
    type: actionType.DISPLAY_DATA,
    payload: val
  };
};