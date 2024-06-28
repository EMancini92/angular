import { Component } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { NgFor, NgIf } from '@angular/common';
import { Day } from '../../models/Day.model';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { FormReservationComponent } from '../form-reservation/form-reservation.component';

@Component({
  selector: 'app-calendar-grid-days',
  standalone: true,
  imports: [NgFor, NgIf, CalendarHeaderComponent, FormReservationComponent],
  templateUrl: './calendar-grid-days.component.html',
  styleUrl: './calendar-grid-days.component.css'
})
export class CalendarGridDaysComponent {
  
  constructor(private calendarService : CalendarService){}

  days:Day[] = [];
  nameDays:string[] = this.calendarService.nameDays;
  curMonth:number = 0;
  curYear:number = this.calendarService.getCurrentYear();
  showForm:boolean = false;
  date:string = '';


  ngOnInit(){

    this.curMonth = this.calendarService.getCurrentMonth();   
    this.curYear = this.calendarService.getCurrentYear();

    this.buildGrid(this.curMonth, this.curYear);
   

  }

  buildGrid(month: number, year:number){
    this.days = [];
    let number_days = this.calendarService.getDaysInMonth(month, year);

    let monthStart = this.calendarService.getMonthStart(month, year);

    for(let i = 1; i < monthStart; i++){
      let day: Day = {Number : 0, Name: '', Disabled : true, Reservations : []}
      this.days.push(day);
    }
    
    for(let i = 1; i < number_days; i++){
      let day: Day = {Number : i, Name: '', Disabled : false, Reservations : []}
      this.days.push(day);
    }
  }

  receiveMessage($event: number){
    this.curMonth = $event;
    this.buildGrid(this.curMonth, this.curYear);
  }

  handleShowForm(day: number){
    let month = this.curMonth < 10 ? '0'+(this.curMonth+1).toString() : (this.curMonth+1).toString();
    let curDay = day < 10 ? '0'+day.toString() : day;
    this.date = this.curYear.toString()+'-'+month+'-'+curDay;
    this.showForm = true;
  }



  
}
