import { Routes } from '@angular/router';
import { TripList } from './trip-list/trip-list';
import { TripEdit } from './trip-edit/trip-edit';
import { Login } from './login/login';

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
    path: 'edit',
    component: TripEdit
  }
];