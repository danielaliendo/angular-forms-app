import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidatorsService} from "../../../shared/services/form-validators.service";
import {EmailValidatorService} from "../../../shared/validators/email-validator.service";

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styles: []
})

export class RegisterPageComponent {

  // public myForm: FormGroup = this.fb.group({
  //   name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
  //   email: ['', [Validators.required, Validators.pattern(emailPattern)]],
  //   userName: ['', [Validators.required, canBeStrider]],
  //   password: ['', [Validators.required, Validators.minLength(6)]],
  //   repeatedPassword: ['', [Validators.required, Validators.minLength(6)]],
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.formValidatorsService.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.pattern(this.formValidatorsService.emailPattern)], [new EmailValidatorService()]],
    email: ['', [Validators.required, Validators.pattern(this.formValidatorsService.emailPattern)], [this.emailValidatorService]],
    userName: ['', [Validators.required, this.formValidatorsService.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatedPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [
      this.formValidatorsService.areFieldsEquals('password', 'repeatedPassword')
    ]
  })

  constructor(
    private emailValidatorService: EmailValidatorService,
  private fb: FormBuilder
,
  private formValidatorsService: FormValidatorsService
) {
}

isInvalidField(field
:
string
):
boolean
{
  return this.formValidatorsService.isInvalidField(this.myForm, field);
}

onSubmit()
:
void {
  this.myForm.markAsTouched();
}

}
