import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {

  @Input() trip: any;

  private router = inject(Router);

  editTrip(trip: any): void {
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['/edit']);
  }

}