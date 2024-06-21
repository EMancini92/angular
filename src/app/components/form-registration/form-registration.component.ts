import { Component } from '@angular/core';
import { User } from '../../models/User.model';
import { FormsModule } from '@angular/forms';
import { UserServicesService } from '../../services/user-services.service';

@Component({
	selector: 'app-form-registration',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './form-registration.component.html',
	styleUrl: './form-registration.component.css'
})
export class FormRegistrationComponent {

	constructor(private userService : UserServicesService){}

	userData:User = this.userService.userData;
}
