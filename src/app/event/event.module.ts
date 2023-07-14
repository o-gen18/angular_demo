import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './containers/event/event.component';
import { RouterModule } from '@angular/router';
import { AddAttendeeComponent } from './components/add-attendee/add-attendee.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EventListComponent } from './components/event-list/event-list.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {StoreModule} from "@ngrx/store";
import {spinnerReducer} from "../state/spinner/spinner.reducer";


@NgModule({
  declarations: [
    EventComponent,
    AddAttendeeComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: EventComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EventModule { }
