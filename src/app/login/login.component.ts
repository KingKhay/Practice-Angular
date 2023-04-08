import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  email: string= '';

  constructor(private router: Router) {
  }

  login() {
    if(this.email === "admin@gmail.com" && this.password === "admin"){
      this.router.navigate(['/users', 'add']);
    }
  }
}
