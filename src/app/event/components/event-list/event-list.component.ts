import {Component, Input} from '@angular/core';
import {Attendee} from "../../../models";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  @Input()
  attendees: Attendee[] | null = []; //Add @Input for attendees being passed in from the parent component.

  @Input()
  attendees$: Attendee[] | null = [];
}
