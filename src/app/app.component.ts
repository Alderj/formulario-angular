import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;        // variavel name do tipo string
  email: string;          // variavel email do tipo string
  phoneNumber: number;     // variavel phoneNumber do tipo number
}
