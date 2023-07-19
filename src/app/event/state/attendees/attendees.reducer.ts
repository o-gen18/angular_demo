import {Attendee} from "../../../models";
import {AttendeesActions, AttendeesActionTypes} from "./attendees.actions";

export interface AttendeeState {
  attendees: Attendee[];
  loading: boolean;
  error: any
}

export const initialAttendeeState: AttendeeState = {
  attendees: [],
  loading: false,
  error: null
};

export function attendeeReducer(state = initialAttendeeState, action: AttendeesActions): AttendeeState {
  console.log('attendeeReducer working...')
  switch (action.type) {
    case AttendeesActionTypes.LoadAttendees: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case AttendeesActionTypes.LoadAttendeesSuccess: {
      return {
        ...state,
        loading: false,
        error: null
      };
    }
    case AttendeesActionTypes.LoadAttendeesFail: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

