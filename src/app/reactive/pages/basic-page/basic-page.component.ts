import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
  styles: []
})

export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.myForm.reset({
      name: 'RTX 5090',
      price: 2500,
      inStorage: 15
    })
  }

  isInvalidField(field: string): boolean {
    const control = this.myForm.controls[field]
    if (!control.errors) return false
    return control.errors && control.touched
  }

  getFieldError(field: string): string {

    const control = this.myForm.controls[field]

    if (!control.errors) return ''

    const errors = control.errors

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required'
        case 'minlength':
          return `Min length must be higher than ${errors['minlength'].requiredLength}`
      }
    }
    return ''
  }

  onSave(): void {

    if (this.myForm.invalid) {
      this.myForm.markAsTouched()
      return
    }

    this.myForm.reset({
      price: 0,
      inStorage: 0
    })

  }

}
