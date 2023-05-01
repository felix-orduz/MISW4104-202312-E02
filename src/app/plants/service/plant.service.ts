import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../model/plant';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Plant[]> {
    return this.http.get(`${environment.plantsUrl}`) as Observable<Plant[]>;
  }
}
