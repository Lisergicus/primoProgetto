import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private authService: AuthenticationService){}

  formLogin!: FormGroup

  ngOnInit(){
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',  Validators.required)
    })
  }

  onSubmit(){
    const utente: User = {
      email: this.formLogin.controls['email'].value,
      password: this.formLogin.controls['password'].value
    }

    this.authService.login(utente);
    // this.httpClient.post<any>().subscribe(
    //   ()=> {}
    // )
  }

  chiamataBE(){
    this.httpClient.get<any>('http://localhost:8086/progetto/list').subscribe(
      (area)=>  {
        console.log('oggetto area ' , area)
      }
    )
  }



}
export class User{
  email!: string;
  password!: string;
}
