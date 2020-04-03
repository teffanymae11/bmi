import * as actionType from "../strings";
import { PersonalData } from "../../components/dashboard/types";

const fromLocalDataJSON = localStorage.getItem("personaldata");

const initState: PersonalData = fromLocalDataJSON == null ?
    {
        name: "",
        height: 0,
        weight: 0,
        gender: "",
        age: ""
    }
    : JSON.parse(fromLocalDataJSON);

const reduce = (state: PersonalData = initState, action: any) => {
    let val = action.payload
    switch (action.type) {

        case actionType.RESET_DATA:
            return {
                ...state,
                name: '',
                height: 0,
                weight: 0,
                gender: '',
                age: 0
            }

        case actionType.DISPLAY_DATA:
            return {
                ...state,
                name: val.name,
                height: val.height,
                weight: val.weight,
                gender: val.gender,
                age: val.age
            }
        default:
            return state;
    }
};

const personalData = (state: PersonalData = initState, action: any) => {
    const newState: PersonalData = reduce(state, action);
    localStorage.setItem("personaldata", JSON.stringify(newState));
    return newState;
}

export default personalData;
