import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  url:any="http://localhost:8000/api/iniciarSesion/";
  login(user:any){
    return this.http.post(this.url,user);
  }
}
