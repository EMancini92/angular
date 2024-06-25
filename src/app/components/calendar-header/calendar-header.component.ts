import { Component, EventEmitter, Output } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar-header',
  standalone: true,
  imports: [],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css'
})
export class CalendarHeaderComponent {

  @Output() messageEvent = new EventEmitter<number>();

  monthName:string = '';
  currentMonth:number = 0;
  currentYear : number = 1999;

  constructor(private calendarService : CalendarService){}

  ngOnInit(){
    this.currentYear = this.calendarService.getCurrentYear();
    this.currentMonth = this.calendarService.getCurrentMonth();
    this.monthName = this.calendarService.getMonthName(this.currentMonth);
  }

  nextMonth(){
    if(this.currentMonth == 11){
      this.currentMonth = 0;
      this.currentYear = this.currentYear+1;
    }else{
      this.currentMonth = this.currentMonth+1;
    }

    this.monthName = this.calendarService.getMonthName(this.currentMonth);
    this.messageEvent.emit(this.currentMonth);
    
  }

  previousMonth(){
    if(this.currentMonth == 0){
      this.currentMonth = 11;
      this.currentYear = this.currentYear-1;
    }else{
      this.currentMonth = this.currentMonth-1;
    }

    this.monthName = this.calendarService.getMonthName(this.currentMonth);
    this.messageEvent.emit(this.currentMonth);
    
  }

}
