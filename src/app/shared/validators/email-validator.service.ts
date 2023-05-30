import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {delay, Observable} from "rxjs";

@Injectable({providedIn: 'root'})

export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;

  validate(control: AbstractControl): ValidationErrors | null;

  validate(control: AbstractControl): Observable<ValidationErrors | null> | ValidationErrors | null {

    const email = control.value

    return new Observable<ValidationErrors | null>((subscriber) => {

      console.log(email)

      if (email === 'danielaliendo.dev@gmail.com') {
        subscriber.next({emailTaken: true})
        subscriber.complete()
        return
      }

      subscriber.next(null)
      subscriber.complete()


    })
      .pipe(
        delay(3000)
      )

  }

  /*

  validate(control: AbstractControl): Observable<ValidationErrors | null> | ValidationErrors | null {

    const email = control.value

    console.log(email)
    return of({
      emailTaken: true
    })
      .pipe(
        delay(2000)
      )

  }

  */

}
