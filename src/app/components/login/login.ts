import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  LoginForm:FormGroup;
  constructor(private fb: FormBuilder)
  {
    this.LoginForm=this.fb.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(0)]],
      }
    );
  }
  get email()
  {
    return this.LoginForm.get('email');
  }
  get password()
  {
    return this.LoginForm.get('password');
  }
  obj:any;
  sum :any = 18;
  submit()
  {
    if(this.LoginForm.invalid)
    {
      this.LoginForm.markAllAsTouched();
      return;
    }
    this.obj ={
    value1:this.LoginForm.get('email')?.value,
    value2:this.LoginForm.get('password')?.value,
  }
  console.log(this.obj);
  }

}