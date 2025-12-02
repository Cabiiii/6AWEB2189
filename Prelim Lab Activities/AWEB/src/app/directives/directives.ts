import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
isStaticNoteVisible: boolean = false;
isNoteVisible: boolean = true;
isParagraphVisible: boolean = false;

showNote(){
  this.isNoteVisible = true;
}

hideNote(){
  this.isNoteVisible = false;
}

toggleNote(){
  this.isParagraphVisible = !this.isParagraphVisible;
}

monthNameStatic: string = 'Mar';
monthNameDynamic: string = 'Mar';

cityList: string[] = ['Angeles','San Fernando','Mabalacat','Porac','Tarlac', 'Manila']

studentList: any[] = [
  {stud_name: "J Cabe", course: "Web Development", isActive: true},
  {stud_name: "K Galang", course: "Web Development", isActive: true},
  {stud_name: "L Aquino", course: "Tourism", isActive: false},
  {stud_name: "J Mananquil", course: "Engineering", isActive: true},
  {stud_name: "S Canlas", course: "EMC", isActive: false},
]
}
