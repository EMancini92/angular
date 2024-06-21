import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGridDaysComponent } from './calendar-grid-days.component';

describe('CalendarGridDaysComponent', () => {
  let component: CalendarGridDaysComponent;
  let fixture: ComponentFixture<CalendarGridDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarGridDaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarGridDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
