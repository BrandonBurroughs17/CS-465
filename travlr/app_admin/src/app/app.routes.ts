import { Routes } from '@angular/router';

import { TripList } from './trip-list/trip-list';
import { TripEdit } from './trip-edit/trip-edit';
import { Login } from './login/login';
import { TripAddComponent } from './trip-add/trip-add.component';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: TripList
  },
  {
    path: 'add',
    component: TripAddComponent
  },
  {
    path: 'edit',
    component: TripEdit
  }
];