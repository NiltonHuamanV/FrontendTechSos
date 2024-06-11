import { Injectable } from '@angular/core';
import { environment } from '../../environments/envirorment';
import { Subject } from 'rxjs';
import { Marca } from '../models/marca';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private url = `${base_url}/marca`
  private listacambio = new Subject<Marca[]>();

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Marca[]>(this.url)
  }

  insert(m: Marca){
    return this.http.post(this.url, m)
  }

  setlist(listaNueva: Marca[]){
    this.listacambio.next(listaNueva)
  }

  getlist(){
    return this.listacambio.asObservable();
  }
}
