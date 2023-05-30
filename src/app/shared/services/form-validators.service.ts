import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from "@angular/forms";

@Injectable({providedIn: 'root'})

export class FormValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() {
  }

  public canBeStrider(control: FormControl): ValidationErrors | null {

    const value = control.value.trim().toLowerCase()

    if (value === 'strider') {
      return {
        noStrider: true
      }
    }

    return null

  }

  public isInvalidField(form: FormGroup, field: string): boolean {
    const control = form.controls[field]
    if (!control.errors) return false
    return control.errors && control.touched
  }


  public areFieldsEquals(fieldOne: string, fieldTwo: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const fieldOneValue = formGroup.get(fieldOne)?.value
      const fieldTwoValue = formGroup.get(fieldTwo)?.value

      if (fieldOneValue !== fieldTwoValue) {

        formGroup.get(fieldTwo)?.setErrors({
          notEquals: true
        })

        return {
          notEquals: true
        }

      }

      formGroup.get(fieldTwo)?.setErrors(null)

      return null
    }
  }

}
