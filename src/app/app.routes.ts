import { Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component'; // Import the new layout component

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'listing', component: ListingComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'details', component: DetailsComponent } // Route for adding new details
    ]
  }
];
