import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS, UserType } from './dummy-users';
import { FooterComponent } from "./footer/footer.component";
import { TasksComponent } from './tasks/tasks.component';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, FooterComponent, User, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal<string>('angular-signals');
  // users = DUMMY_USERS;
  selectedUser: UserType = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  
  onSelectUser(user: UserType) {
    console.log('Initial APP user: ', this.selectedUser);
    console.log('Selected user ID: ', user);
    this.selectedUser = user;
  }
}
