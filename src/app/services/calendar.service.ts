import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

	monthsName: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	nameDays:string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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

	public getMonthStart(month:number, year:number){
		let data = new Date(year, month, 1);
    	let monthStart = data.toString().split(' ')[0];

		let result = 0;

		switch(monthStart){
			case 'Mon' : result = 1; break;
			case 'Tue' : result = 2; break;
			case 'Wed' : result = 3; break;
			case 'Thu' : result = 4; break;
			case 'Fri' : result = 5; break;
			case 'Sat' : result = 6; break;
			case 'Sun' : result = 7; break;
		}

		return result;
	}
}

