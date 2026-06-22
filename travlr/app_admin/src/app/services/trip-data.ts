import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/trips';

  getTrips() {
    return this.http.get<any[]>(this.apiUrl);
  }
}