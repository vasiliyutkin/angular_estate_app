import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialUser } from 'angularx-social-login';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChatDialogComponent } from './chat-dialog';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  innerWidth: number = window.innerWidth;

  constructor(
    private authService: AuthenticationService,
    public dialog: MatDialog
  ) {
    window.addEventListener('resize', (_) => {
      this.innerWidth = window.innerWidth;
    });
  }

  public get user(): User {
    return this.authService.userValue;
  }

  public get isAdmin(): boolean {
    return this.authService.isAdmin;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChatDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
