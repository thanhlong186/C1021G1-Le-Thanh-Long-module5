import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  createLoginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createLoginForm = new FormGroup({
      emails: new FormControl('', [Validators.required, Validators.email]),
      passwords: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(createLoginForm: FormGroup) {
    this.createLoginForm = createLoginForm.value;

  }
}
