import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}

  formLogin!: FormGroup;

  ngOnInit(){
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
 
    // ALTRO ESEMPIO!!!
    // this.formLogin = this.formBuilder.group({
    //   email: [''],
    //   password:['']
    // })
  }
  onSubmit() {
    console.log(this.formLogin);
    console.log('Username ' + this.formLogin.controls['email'].value)
  }









}
