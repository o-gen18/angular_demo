import { ActionReducerMap } from '@ngrx/store';

import * as fromRoot from './../../state/state';
import * as fromAttendees from './attendees/attendees.reducer';
import {AttendeesEffects} from "./attendees/attendees.effects";

export interface EventState {
  attendees: fromAttendees.AttendeeState;
}

export interface State extends fromRoot.State {
  event: EventState;
}

export const reducers: ActionReducerMap<EventState> = {
  attendees: fromAttendees.attendeeReducer
};

export const effects: any[] = [AttendeesEffects];
