import { Component, computed, EventEmitter, Input, input, InputSignal, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);
  // public selectedUser = DUMMY_USERS[0];
  public selectedUser = signal(DUMMY_USERS[this.randomIndex()]);

  // get imagePath() {
    // return `users/${this.selectedUser().avatar}`;
  // }

  @Input({ required: true }) avatar!: string;
  public imagePath = computed(() => `users/${this.avatar}`);
  id = input.required<string>();
  @Output() select = new EventEmitter<InputSignal<string>>();
  // @Input() name!: string;
  name = input.required<string>();
  selectOutputSignal = output<InputSignal<string>>()

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[this.randomIndex()]);
    // this.selectedUser =
      // DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    this.select.emit(this.id);
    this.selectOutputSignal.emit(this.id);
  }

}
