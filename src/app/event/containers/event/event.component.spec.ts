import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import {NO_ERRORS_SCHEMA} from "@angular/compiler";
import {EventService} from "../../services/event.service";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {Store} from "@ngrx/store";

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let service: EventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: null },
        {
          provide: EventService,
          useValue: {
            getAttendees: () => {}
          }
        },
        {
          provide: Store,
          useValue: {
            pipe: () => {}
          }
        }
      ],
      declarations: [ EventComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of attendees set', () => {
    const fakeAttendees = [{ name: 'FAKE_NAME', attending: false, guests: 0 }];

    jest
      .spyOn(service, 'getAttendees')
      .mockImplementation(() => of(fakeAttendees));

    component.ngOnInit();

    component.attendees$.subscribe(attendees => {
      expect(attendees).toEqual(fakeAttendees);
    });
  });
});
