import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form!: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['test'],
      alterego: this.fb.control('flavio', [Validators.required, this.passwordValidator]),
      planet: new FormControl('Terra', [Validators.required, Validators.minLength(5)]),
      //Validators.min(5) -> numeri
      //Validators.minLength(5) -> stringhe array
      powers: this.fb.array([], [Validators.required])
    })
  }

  // CUSTOM VALIDATOR
  passwordValidator = (fc:FormControl)=>{
    return null //validazione ok
    return {'password': true} //validazione non ok
  }


  submit() {
    console.log(this.form, this.form.value);
  }

  getFormControl(n:string) {
    return this.form.get(n) as AbstractControl
  }

  getFormArray(n:string) {
    return this.form.get(n) as FormArray
  }

  addPower() {
    let powerControl = new FormControl('Power', [Validators.required])
    this.getFormArray("powers").controls.push(powerControl)
  }

  

}
