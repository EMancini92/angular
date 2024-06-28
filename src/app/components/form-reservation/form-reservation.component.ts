import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../models/Reservation.model';
import { ReservationService } from '../../services/reservation.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form-reservation',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './form-reservation.component.html',
  styleUrl: './form-reservation.component.css'
})
export class FormReservationComponent {

  @Input() date:string = '';

  reservation:Reservation = {
    Date:'',
    Time: '',
    Service : ''
  }

  services:string[] = [];
  hours:string[] = [];

  constructor(private reservationService : ReservationService){}

  ngOnInit(){
    this.reservation.Date = this.date;
    this.services = this.reservationService.services;
    this.hours = this.reservationService.hours;
  }
}
