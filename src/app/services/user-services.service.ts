import { Injectable } from '@angular/core';
import { User } from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  userData:User = {
		FirstName : '',
		LastName : '',
		Phone : '',
		Email: '',
		Password : '',
    Token : ''
	}

  public LoginUser(user:User){
    console.log('user : ', user);
  }

  public CreateUser(user:User){
    console.log('user : ', user);
  }


}
