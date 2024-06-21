import { Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', title: 'Homepage', component: HomepageComponent},
    { path: 'Login',title:"Login", component: FormLoginComponent },
    { path: 'Registration',title:"Registration", component: FormRegistrationComponent },
    { path: 'MyProfile',title:"My Profile", component: UserProfileComponent },
];
