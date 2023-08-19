import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  phoneNumber: FormControl = new FormControl('');

  sendValues(){
    console.log(this.name.value, this.email.value, this.phoneNumber.value);
  }

}
