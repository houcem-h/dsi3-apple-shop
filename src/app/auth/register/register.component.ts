import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirm_password: ['']
    });
   }

  ngOnInit(): void {
  }

}
