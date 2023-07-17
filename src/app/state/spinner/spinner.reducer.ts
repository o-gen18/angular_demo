import {SpinnerActions, SpinnerActionTypes} from "./spinner.actions";

export interface State {
  isOn: boolean;
}

export const initialState: State = {
  isOn: false
};

export function spinnerReducer(
  state = initialState, action: SpinnerActions): State {
  console.log("Spinner reducer called... type = ", action.type)
  switch (action.type) {
    case SpinnerActionTypes.StartSpinner: {
      return {
        isOn: true
      };
    }

    case SpinnerActionTypes.StopSpinner: {
      return {
        isOn: false
      };
    }

    default:
      return state;
  }
}

