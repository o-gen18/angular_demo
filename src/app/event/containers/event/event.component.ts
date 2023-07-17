import {Component, Injectable, OnInit} from '@angular/core';
import {Attendee} from "../../../models";
import {EventService} from "../../services/event.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {State} from "../../../state/state";
import {StartSpinner, StopSpinner} from "../../../state/spinner/spinner.actions";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];
  attendees$: Observable<Attendee[]> = new Observable<Attendee[]>();
  spinner$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store<State>,
              private eventService: EventService) {
    console.log("EventComponent constructor!")
    //In Angular, when you define a constructor parameter with an access modifier
    // (such as private, public, or protected),
    // TypeScript automatically creates and initializes a class property with the same name.
    // This is a shorthand syntax provided by TypeScript called "parameter properties."
  }


  ngOnInit(): void {
    console.log("EventComponent initializing...")
    this.getAttendees();
    this.getAttendees$();
    this.spinner$ = this.store.pipe(select(state => {
      console.log("Store select spinner state... ")
      return state.spinner.isOn;
    }));
  }

  addAttendee(attendee: Attendee) {
    console.log('Starting spinner...');
    this.store.dispatch(new StartSpinner());
    console.log('Adding attendee ... ', this.attendees);
    this.eventService.addAttendee(attendee).subscribe(() => {
      console.log('Attendee Observable subscription action... stopping spinner');
      this.store.dispatch( new StopSpinner())
      this.getAttendees();
    })
  }

  getAttendees() {
    this.eventService.getAttendees().subscribe(attendees => this.attendees = attendees);
  }

  getAttendees$() {
    this.attendees$ = this.eventService.getAttendees();
  }

//  Swap from subscription to async pipe
  /**
   * Angular pipes, a way to write display-value transformations that you can declare in your HTML.
   * The async pipe is a special built in pipe from Angular that will subscribe to an observable for you in the HTML template
   * and also unsubscribe when the components ngOnDestory life cycle hook is fired.
   * Another quirk is that it will also mark the component to be checked by Angular's  change detection
   * on its next cycle.
   *
   * attendees: Attendee[] = []; => attendees$: Observable<Attendee[]>;
   * getAttendees() {
   *     this.attendees$ = this.eventService.getAttendees();
   *   }
   *
   */
}
