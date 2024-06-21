import { Component } from '@angular/core';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { CalendarGridDaysComponent } from '../calendar-grid-days/calendar-grid-days.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CalendarHeaderComponent, CalendarGridDaysComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
