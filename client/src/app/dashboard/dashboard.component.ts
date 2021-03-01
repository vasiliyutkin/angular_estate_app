import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  welcomeText: string;
  adminText = 'администратор';
  isAdmin: boolean;

  constructor(private authService: AuthenticationService) {
    this.isAdmin = this.authService && this.authService.isAdmin;

    this.welcomeText = this.authService.loggedIn
      ? `ты же -> ${this.authService.user && this.authService.user.username}`
      : 'Обыватель';

    if (this.authService.loggedIn && this.isAdmin) {
      this.welcomeText = `Аня и ее друзья: ${
        this.authService.user && this.authService.user.username
      }`;
    }
  }

  ngOnInit(): void {}
}
