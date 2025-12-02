import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demonstration"; //Text Interpolation
  imageUrl = "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/800px-0001Bulbasaur.png";
  w = 150;
  h = 150;
  altText = "bulbulsaur"

  textColor = "white"
  isHighlighted = true;
  yourName = "";
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  //Interpolation
  studentName = "Justin Cabe";
  score = 95;

  //Property Binding
  image = "https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/250px-0003Venusaur.png";
  isDisabled = true;

  //Attribute Binding
  colSpanValue = 3;

  //Class Binding
  isPassing = true;

  //Style Binding
  boxColor = "green";
  boxSize = "150px";
}
