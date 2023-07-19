import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EventState} from "../index";

export const getAttendeeEventState = createFeatureSelector<EventState>("event");

export const getAttendeeState = createSelector(
  getAttendeeEventState,
  state => state.attendees
)

export const getAttendeesSelector = createSelector(
  getAttendeeState,
  state => state.attendees
)
