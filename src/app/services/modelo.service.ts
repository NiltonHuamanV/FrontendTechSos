import { Injectable } from '@angular/core';
import { environment } from '../../environments/envirorment';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../models/modelo';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  private url = `${base_url}/modelo`

  constructor(private http:HttpClient) { }
  
  list(){
    return this.http.get<Modelo[]>(this.url)
  }
}
