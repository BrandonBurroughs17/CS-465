import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trip-edit.html',
  styleUrl: './trip-edit.css'
})
export class TripEdit {

  trip = {
    code: 'GR001',
    name: 'Gale Reef',
    length: '7 Nights',
    resort: 'Gale Reef Resort',
    perPerson: '$1299'
  };

  saveTrip() {
    alert('Trip Updated');
  }

}