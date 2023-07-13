import {Component, OnInit} from '@angular/core';
import {Attendee} from "../../../models";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  ngOnInit(): void {
  }

  attendees: Attendee[] = [];

  addAttendee(attendee: Attendee) {
    this.attendees = [...this.attendees, attendee]; //spread operator (...) in TypeScript to create a new array
    console.log('TCL: EventComponent -> addAttendee -> this.attendees', this.attendees);
  } //It creates a new array by combining the existing elements of this.attendees with the new attendee element.

}
