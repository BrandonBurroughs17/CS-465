import { Component, inject } from '@angular/core';
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
  selector: 'app-trip-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './trip-add.component.html',
  styleUrl: './trip-add.component.css'
})
export class TripAddComponent {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private tripDataService = inject(TripDataService);

  addForm: FormGroup = this.formBuilder.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    length: ['', Validators.required],
    start: ['', Validators.required],
    resort: ['', Validators.required],
    perPerson: ['', Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required]
  });

  submitted = false;

  public onSubmit(): void {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.tripDataService.addTrip(this.addForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('Error adding trip:', err);
      }
    });
  }

}