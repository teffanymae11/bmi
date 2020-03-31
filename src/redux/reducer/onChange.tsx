import * as actions from '../../strings'
import { AppState } from '../../types';

const data = localStorage.getItem("data");

const initState: AppState = data == null ? {
  personalVars: []
} : JSON.parse(data);

const changeThis = (state: AppState, action: any) => {
  const personalString = { name: '', height: '', weight: '', gender: '', age: '' }

  switch (action.type) {
    case actions.ON_CHANGE:
      return {
        ...state,
        personal: {
          ...state.personalVars,
          [action.payload.targetName]: action.payload.targetValue
        }
      }

    case actions.ON_SUBMIT:
      return {
        ...state,
        personal: {
          ...state.personalVars,
          personalString
        }
      }

    case actions.ON_DISPLAY:
      return {
        ...state,
        personal: {
          ...state.personalVars,
          name: action.payload.name,
          height: action.payload.height,
          weight: action.payload.weight,
          gender: action.payload.gender,
          age: action.payload.age
        }
      }

    case actions.ON_RESET:
      return {
        ...state,
        personal: {
          ...state.personalVars,
          personalString
        }
      };

    default:
      return state;
  }
}

const changes = (state: AppState = initState, action: any) => {
  const newState: AppState = changeThis(state, action);
  localStorage.setItem("data", JSON.stringify(newState));
  return newState;
}

export default changes