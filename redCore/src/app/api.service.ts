import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private storage: Storage) { }

  async tieneCuenta(email: string) {
    const token = await this.storage.get('TOKEN');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization : 'Bearer ' + token
      })
    };
    return this.http.get(`${this.API}user/${email}`, httpOptions);
  }

  logIn(body) {
    return this.http.post(`${this.API}user/login`, body);
  }

  registrarUsuario(body) {
    return this.http.post(`${this.API}user/`, body);
  }

  checkUser(username: string) {
    return this.http.get(`${this.API}check/username/${username}`);
  }

  checkMail(email: string) {
    return this.http.get(`${this.API}check/email/${email}`);
  }

}
