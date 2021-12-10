import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.signupForm= this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirm_password: ['', [Validators.minLength(6), Validators.required]],
    }, {validator: this.passwordMatchValidator('password', 'confirm_password')}
    )
   }

  ngOnInit(): void {
    console.log(this.signupForm);
  }

  signupUser() {
    console.log(this.signupForm);
  }

  private passwordMatchValidator(password: string, confirm_password: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[password];
      const confirmPasswordInput = group.controls[confirm_password];
      if (passwordInput.value !== confirmPasswordInput.value) {
        return confirmPasswordInput.setErrors({ NoPassswordMatch: true });
      }
    }
  }

}
