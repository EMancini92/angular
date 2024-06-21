import { Reservation } from "./Reservation.model";

export class Day{
    Number:number = 0;
    Name:string = '';
    Disabled:boolean = false;
    Reservations:Reservation[] = [];
}