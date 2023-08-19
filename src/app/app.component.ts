import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  phoneNumber: FormControl = new FormControl('');

  form: FormGroup; // criado a variavel form que é to tipo FormGroup

  constructor(
    private fb:FormBuilder // criamos uma variavel privada fb( "fb" de formbuilder) do tipo FormBuilder
  ){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]]
    });
  }

  sendValues(){
    console.log(this.name.value, this.email.value, this.phoneNumber.value);

    this.form.reset();
  }

}
