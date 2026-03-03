import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-membership-form',
  standalone: true,
  imports: [
    DatePipe, FormsModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, 
    MatFormFieldModule, MatInputModule, MatSliderModule, MatRadioModule, 
    MatDatepickerModule, MatNativeDateModule, MatCardModule, 
    MatButtonToggleModule, MatBadgeModule, MatSlideToggleModule
  ],
  templateUrl: './membership-form.html',
  styleUrl: './membership-form.css',
})
export class MembershipForm {
  submitted = false;
  isDarkMode = true;

  // Requirement: Accept only users born in 2006 or earlier
  maxDate: Date = new Date(2006, 11, 31);

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // Requirement: Alphanumeric, starts with letter, min 8 chars
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/) 
    ]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    fitnessLevel: new FormControl(5)
  });

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit(data: any) {
    this.submitted = true;
    if (this.formdata.valid) {
      console.log("Gym Membership Data:", data);
    }
  }
}