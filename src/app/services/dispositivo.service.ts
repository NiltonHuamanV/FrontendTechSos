import { Injectable } from '@angular/core';
import { environment } from '../../environments/envirorment';
import { Dispositivo } from '../models/dispositivo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private url = `${base_url}/dispositivo`
  private listaCambio = new Subject<Dispositivo[]>();
  constructor(private httpClient:HttpClient) { }
  
  list(){
    return this.httpClient.get<Dispositivo[]>(this.url)
  }
  insert(p: Dispositivo) {
    return this.httpClient.post(this.url, p);
  }
  setList(listaNueva: Dispositivo[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  
  listId(id: number) {
    return this.httpClient.get<Dispositivo>(`${this.url}/${id}`);
  }

  update(d: Dispositivo) {
    return this.httpClient.put(this.url, d);
  }

}
