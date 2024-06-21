import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User.model';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  constructor(private userService : UserServicesService){}
	userData:User = this.userService.userData;

  handleLogin(){
    this.userService.LoginUser(this.userData);
  }

}
