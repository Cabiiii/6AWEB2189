import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-membership-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSliderModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatButtonToggleModule, 
    MatSlideToggleModule,
    MatBadgeModule,
    DatePipe
  ],
  templateUrl: './membership-form.html',
  styleUrl: './membership-form.css'
})
export class MembershipForm {
  submitted = false;
  isDarkMode = true;

  // Requirement: Accept users born in 2006 or earlier
  maxDate: Date = new Date(2006, 11, 31);

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    
    // Requirement: Valid Email format
    email: new FormControl('', [Validators.required, Validators.email]),

    // Requirement: Alphanumeric, Min 8 chars, Starts with a Letter
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/) 
    ]),
    
    gender: new FormControl('male', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    fitnessLevel: new FormControl(5)
  });

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.submitted = true;
      console.log("Titan Fitness Enrollment:", data);
    }
  }
}