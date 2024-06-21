import { Component } from '@angular/core';
import { FormRegistrationComponent } from '../form-registration/form-registration.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomepageComponent, FormRegistrationComponent, FormLoginComponent, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

}
