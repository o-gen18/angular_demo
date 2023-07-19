import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {EventService} from "../../services/event.service";
import {AttendeesActionTypes, LoadAttendees, LoadAttendeesFail, LoadAttendeesSuccess} from "./attendees.actions";
import {of, map, switchMap, catchError} from "rxjs";
import {Attendee} from "../../../models";

@Injectable()
export class AttendeesEffects {

  constructor(private actions$: Actions,
              private eventService: EventService) {
    //Inject the actions observable from NgRx that will emit each
    //action dispatched in our application and the EventService to get the attendees.
  }

  @Effect()
  getAttendees$ = this.actions$.pipe( //List the injected actions and filter on them with the ofType operator from NgRx.
    ofType(AttendeesActionTypes.LoadAttendees),
    switchMap((action: LoadAttendees) => //Use the switchMap operator to switch from the actions stream to a new observable returned from our EventService and return an LoadAttendeesSuccess action.
      this.eventService.getAttendees().pipe(
        map((attendees: Attendee[]) => new LoadAttendeesSuccess(attendees)),
        catchError(error => of(new LoadAttendeesFail(error))) //Add a catchError operator and return an observable of LoadAttendeesFail with a payload of the error.
      ))
  );
}
