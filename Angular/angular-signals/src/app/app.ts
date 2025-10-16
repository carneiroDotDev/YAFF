import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
}
