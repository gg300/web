import { Component } from '@angular/core';
import {ExperiencesComponent} from '../experiences/experiences.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ExperiencesComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
