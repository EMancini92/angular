import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

	monthsName: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

	public getCurrentMonth(){
		return new Date().getMonth();
	}

	public getCurrentYear(){
		return new Date().getFullYear();
	}
  
	public getDaysInMonth(month:number, year: number){
		return new Date(year, month, 0).getDate();
	}

	public getLastDayOfMonth(month:number, year: number){
		return new Date(year, month, 0);
	}

	public getMonthName(month:number){
		return this.monthsName[month];
	}
}

