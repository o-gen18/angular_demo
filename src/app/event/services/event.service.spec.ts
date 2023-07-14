import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Attendee} from "../../models";

describe('EventService', () => {
  let service: EventService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get attendees', () => {
    const testAttendees: Attendee[] = [
      {
        name: 'Test Data',
        attending: true,
        guests: 1
      }
    ];

    service.getAttendees().subscribe();

    const req = httpTestingController.expectOne('/api/attendees');

    expect(req.request.method).toEqual('GET');

    req.flush(testAttendees);

    httpTestingController.verify();
  });
});
