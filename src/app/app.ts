import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('doctor-appointment-team1');
}
