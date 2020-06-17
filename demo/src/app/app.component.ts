import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rishee Jayasimha\'s Website';
  ids: Array<String> = ['Website', 'CapstoneProject', 'MLProject']
}
