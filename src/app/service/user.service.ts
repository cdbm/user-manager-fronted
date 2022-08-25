import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createUser(user: User): Promise<User> {
    return this.http.post(this.URL + "/saveUser", JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => {
        if (res) { return user; } else { return null; }
      })
      .catch(this.handleError);
  }

  getUsers() {
    return this.http.get(this.URL + "/getUsers");
  }

  private handleError(err: any): Promise<any> {
    console.error(err);
    return Promise.reject(err.message || err);
  }
}
