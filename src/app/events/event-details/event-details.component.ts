import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../shared/models/event.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  eventBookingForm: FormGroup;
  eventDetails: Event;
  successMessage: string;
  constructor(
    private route: ActivatedRoute,
    private event: EventService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getEventListByEventID();
    this.initBookingForm();
  }
  getEventListByEventID(): void {
    this.event.eventByID(this.route.snapshot.params.id).subscribe(
      res => {
        this.eventDetails = res[0];
        console.log(this.eventDetails);
        this.eventBookingForm.controls[`seleted_seats`].setValidators(
          [Validators.required, Validators.max(this.eventDetails.available_seats)]);
        this.eventBookingForm.controls[`seleted_seats`].updateValueAndValidity();

      }
    );
  }

  initBookingForm() {
    this.eventBookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      seleted_seats: ['', Validators.required],
      Attendees: this.fb.array([this.initAttendees()])
    });
  }
  initAttendees() {
    return this.fb.group({
      attendee_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }

  get eventAttendees() {
    return this.eventBookingForm.get('Attendees') as FormArray;
  }

  addAttendees() {
    this.eventAttendees.push(this.initAttendees());
  }

  selectedSeats(seats: number): void {
    if (seats <= this.eventDetails.available_seats) {
      this.eventAttendees.clear();
      for (let i = 0; i < seats; i++) {
        this.addAttendees();
      }
    }
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  submit() {
    if (this.eventBookingForm.valid) {
      this.successMessage = 'Tickets booked';
    }
  }
}
