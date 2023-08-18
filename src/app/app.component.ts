import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined  
  email: string | undefined   
  phoneNumber: number | undefined

  sendValues(){
    console.log(this.name, this.email, this.phoneNumber);
    
  }
}
