import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './trip-edit.html',
  styleUrl: './trip-edit.css'
})
export class TripEdit implements OnInit {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private tripDataService = inject(TripDataService);
  private cdr = inject(ChangeDetectorRef);

  editForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    const token = localStorage.getItem('travlr-token');

    if (!token) {
      window.location.href = '/login';
      return;
    }

    const tripCode = localStorage.getItem('tripCode');

    if (!tripCode) {
      alert('No trip selected for editing.');
      this.router.navigate(['/']);
      return;
    }

    this.editForm = this.formBuilder.group({
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (result: any) => {

        const trip = Array.isArray(result) ? result[0] : result;

        this.editForm.patchValue({
          code: trip.code || tripCode,
          name: trip.name,
          length: trip.length,
          start: trip.start,
          resort: trip.resort,
          perPerson: trip.perPerson,
          image: trip.image,
          description: trip.description
        });

        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error loading trip:', err);
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      alert('Please complete all fields.');
      return;
    }

    const tripCode = localStorage.getItem('tripCode') || this.editForm.value.code;

    this.tripDataService.updateTrip(tripCode, this.editForm.value).subscribe({
      next: () => {
        alert('Trip updated successfully.');
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('Error updating trip:', err);
        alert('Trip update failed.');
      }
    });
  }

}