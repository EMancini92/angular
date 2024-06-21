import { Component } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar-grid-days',
  standalone: true,
  imports: [],
  templateUrl: './calendar-grid-days.component.html',
  styleUrl: './calendar-grid-days.component.css'
})
export class CalendarGridDaysComponent {

  constructor(private calendarService : CalendarService){}
}
