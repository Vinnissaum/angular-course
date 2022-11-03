import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  message = 'Hello World!';
  updatedValue: number = 5454;
  isDestroyed: boolean = false;

  incrementValue() {
    this.updatedValue++;
  }

  destroy() {
    this.isDestroyed = true;
  }
}
