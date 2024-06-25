import { Component } from '@angular/core';
import { CalendarGridDaysComponent } from '../calendar-grid-days/calendar-grid-days.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CalendarGridDaysComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   
}
