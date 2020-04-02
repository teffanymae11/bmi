import { PersonalData } from "../components/dashboard/types";
import * as actionType from "./strings";

export const addRecord = (newPersonalData: PersonalData) => {
  return {
    type: actionType.SUBMIT_DATA,
    payload: newPersonalData
  };
};

export const displayData = (val:PersonalData) => {
  return {
    type: actionType.DISPLAY_DATA,
    payload: val
  };
};