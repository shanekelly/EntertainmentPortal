import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  student: Student = {
    FirstName: 'Shane',
    LastName: 'Kelly',
    Campus: 'Tafalgar'
  };
}