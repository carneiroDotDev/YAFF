import { Component, computed, input, output, signal } from '@angular/core';
import { DUMMY_USERS, UserType } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);
  // public initialUser = DUMMY_USERS[0];
  public initialUser = signal(DUMMY_USERS[this.randomIndex()]);

  // get imagePath() {
    // return `users/${this.initialUser().avatar}`;
  // }

  user = input.required<UserType>();
  public imagePath = computed(() => {
    console.log("Initial User: ", this.user());
    return `users/${this.user().avatar}`});
  // id = input.required<string>();
  // @Output() select = new EventEmitter<InputSignal<string>>();
  // @Input() name!: string;
  // name = input.required<string>();
  selectOutputSignal = output<UserType>()

  onSelectUser() {
    const randomUser = DUMMY_USERS[this.randomIndex()];
    this.initialUser.set(randomUser);
    // this.initialUser =
    //   DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    // this.select.emit(this.id);
    this.selectOutputSignal.emit(randomUser);
  }

}
