import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'department';

  getName(name: string) {
    alert(`Name: ${name}`);
  }

  getId(id: number) {
    alert(`Id: ${id}`);
  }
}
