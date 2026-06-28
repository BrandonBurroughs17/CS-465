import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/trips';

  private getAuthHeaders() {
    const token = localStorage.getItem('travlr-token') || '';

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getTrips() {
    return this.http.get<any[]>(this.apiUrl, this.getAuthHeaders());
  }

  getTrip(tripCode: string) {
    return this.http.get<any>(
      `${this.apiUrl}/${tripCode}`,
      this.getAuthHeaders()
    );
  }

  addTrip(trip: any) {
    return this.http.post<any>(
      this.apiUrl,
      trip,
      this.getAuthHeaders()
    );
  }

  updateTrip(tripCode: string, trip: any) {
    return this.http.put<any>(
      `${this.apiUrl}/${tripCode}`,
      trip,
      this.getAuthHeaders()
    );
  }

  deleteTrip(tripCode: string) {
    return this.http.delete<any>(
      `${this.apiUrl}/${tripCode}`,
      this.getAuthHeaders()
    );
  }

}