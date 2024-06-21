import { Component } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar-header',
  standalone: true,
  imports: [],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css'
})
export class CalendarHeaderComponent {

  monthName:string = '';
  currentMonth:number = 0;
  currentYear : number = 1999;

  constructor(private calendarService : CalendarService){}

  ngOnInit(){
    this.currentYear = this.calendarService.getCurrentYear();
    this.currentMonth = this.calendarService.getCurrentMonth();
    this.monthName = this.calendarService.getMonthName(this.currentMonth);
  }

}
