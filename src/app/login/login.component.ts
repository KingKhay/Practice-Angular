import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  email: string= '';

  login() {
    if(this.email === "admin@gmail.com" && this.password === "admin"){
      alert("login Successful")
    }
  }
}
