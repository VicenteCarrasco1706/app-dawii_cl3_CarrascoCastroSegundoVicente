import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obrero } from './obrero';

@Injectable({
  providedIn: 'root'
})
export class ObreroService {

  constructor(private http: HttpClient) { }

  listarObrero(): Observable<Obrero[]>{
    return this.http.get<Obrero[]>("https://rickandmortyapi.com/api/character");
  }
}
