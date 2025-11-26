import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  LoginForm:FormGroup;
  constructor(private fb: FormBuilder,private router:Router)
  {
    this.LoginForm=this.fb.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(1)]],
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
  this.router.navigate(['/home']);
  }

}