import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'reactive-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: []
})

export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['LOL', Validators.required],
      ['Take It Two', Validators.required],
    ])
  })

  public newFavorite: FormControl = new FormControl<string>('', [Validators.required])

  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray
  }

  isInvalidField(field: string): boolean {
    const control = this.myForm.controls[field]
    if (!control.errors) return false
    return control.errors && control.touched
  }

  isInvalidFieldInArray(formArray: FormArray, index: number): boolean {
    const control = formArray.controls[index]
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

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index)
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) {
      return
    }
    const newFavorite = this.newFavorite.value

    console.log(newFavorite);

    this.favoriteGames.push(
      this.fb.control(newFavorite, Validators.required)
    )

    this.newFavorite.setValue('')

  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAsTouched();
      return
    }

    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
    this.myForm.reset();
  }

}
