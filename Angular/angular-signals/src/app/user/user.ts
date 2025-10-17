import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  // public selectedUser = DUMMY_USERS[0];
  public selectedUser = signal(DUMMY_USERS[0]);
  public imagePath = computed(() => `users/${this.selectedUser().avatar}`);

  // get imagePath() {
    // return `users/${this.selectedUser().avatar}`;
  // }

  @Input({ required: true }) avatar!: string;
  @Input() name!: string;

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
    // this.selectedUser =
      // DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }

}
