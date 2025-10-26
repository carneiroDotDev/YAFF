import { Component, InputSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { FooterComponent } from "./footer/footer.component";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, FooterComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-signals');
  users = DUMMY_USERS;

  onSelectUser(userId: InputSignal<string>) {
    console.log('Selected user ID: ', userId());
  }
}
