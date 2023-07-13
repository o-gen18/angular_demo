import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Attendee} from "../../../models";

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.scss']
})
export class AddAttendeeComponent {
  @Output()
  addAttendee = new EventEmitter<Attendee>(); //Add event emitter to component

  addAttendeeForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  submit() {
    const attendee = {
    name: this.addAttendeeForm.value.name,
    attending: true,
    guests: 0
    };
    console.log('TCL: AddAttendeeComponent -> submit -> attendee', attendee);
    this.addAttendee.emit(attendee as Attendee); //Emit add attendee event
  }
}
