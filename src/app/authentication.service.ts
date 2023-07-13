import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  protected token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public tokenObservable() {
    return this.token.asObservable();
  }

  get tokenValue() {
    return this.token.value;
  }

  constructor(private httpClient: HttpClient) { }
  getList()  :  Observable<any> {
    return this.httpClient.get<any>('');
  }

  login(user: User) : Observable<any> {
    this.httpClient.post<any>('http://localhost:8086/auth/authenticate', user).subscribe({
      next: result => {
        this.token.next(result.body.access_token);
        console.log('result ', result)
      }
    });
    return this.token;
  }

  logout(){
    this.token.next('');
  }
}
