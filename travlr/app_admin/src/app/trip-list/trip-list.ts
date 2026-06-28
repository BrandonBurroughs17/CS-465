import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TripDataService } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {

  private tripDataService = inject(TripDataService);
  private cdr = inject(ChangeDetectorRef);

  trips: any[] = [];

  ngOnInit(): void {
    const token = localStorage.getItem('travlr-token');

    if (!token) {
      window.location.href = '/login';
      return;
    }

    this.tripDataService.getTrips().subscribe({
      next: (value: any[]) => {
        this.trips = value;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error retrieving trips:', err);
      }
    });
  }

}