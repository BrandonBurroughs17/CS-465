import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';

  login() {

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({

      next: (result: any) => {

        localStorage.setItem(
          'travlr-token',
          result.token
        );

        this.router.navigate(['/']);

      },

      error: () => {

        alert('Invalid username or password');

      }

    });

  }

}