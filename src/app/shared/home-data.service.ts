
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  private dataHomeUrl = 'assets/data/home-data.json'; // Path to your JSON file
  private dataSonanUrl = 'assets/data/sonan-data.json'; // Path to your JSON file
  private dataAdvicesUrl = 'assets/data/advices-data.json'; // Path to your JSON file
  private dataForgettableSonanUrl = 'assets/data/forgettable-sonan-data.json'; // Path to your JSON file
  private dataAdhkarUrl = 'assets/data/adhkar-data.json'; // Path to your JSON file
  private dataWifeSonanrUrl = 'assets/data/wife-sonan-data.json'; // Path to your JSON file


  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataHomeUrl);
  }
  getSonan(): Observable<any[]> {
    return this.http.get<any[]>(this.dataSonanUrl);
  }
 
  getAdvices(): Observable<any[]> {
    return this.http.get<any>(this.dataAdvicesUrl).pipe(
      map(response => response.advices || response) // Extract advices array
    );
  }
  getForgettableSonan(): Observable<any[]> {
    return this.http.get<any[]>(this.dataForgettableSonanUrl);
  }
  getAdhkar(): Observable<any[]> {
    return this.http.get<any[]>(this.dataAdhkarUrl);
  }
  getWifeSonan(): Observable<any[]> {
    return this.http.get<any[]>(this.dataWifeSonanrUrl);
  }
}



