import { Routes } from '@angular/router';
import { TripList } from './trip-list/trip-list';
import { TripEdit } from './trip-edit/trip-edit';

export const routes: Routes = [
  {
    path: '',
    component: TripList
  },
  {
    path: 'edit',
    component: TripEdit
  }
];