import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INacionalidad } from '../Modelos/Nacionalidad';
@Injectable({
  providedIn: 'root'
})
export class NacionalidadService {

  constructor(private http:HttpClient) { }

  nacionalidades():Observable<INacionalidad[]>{
    return this.http.get<INacionalidad[]>("http://45.238.216.15:81/api/Nacionalidades");
  }



}
