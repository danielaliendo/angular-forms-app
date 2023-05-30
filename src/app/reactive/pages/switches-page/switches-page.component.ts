import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'reactive-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})

export class SwitchesPageComponent implements OnInit{

  public myForm:FormGroup = this.fb.group({
    genders: ['Male', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  public person = {
    gender: 'Female',
    wantNotifications: false,
    termsAndConditions: true,
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  isInvalidField(field: string): boolean {
    const control = this.myForm.controls[field]
    if (!control.errors) return false
    return control.errors && control.touched
  }

  onSave() {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    const {
      termsAndCondition,
      ...newPerson
    } = this.myForm.value

    this.person = newPerson

    // delete this.person.termsAndConditions

  }

  protected readonly onsubmit = onsubmit;


}
