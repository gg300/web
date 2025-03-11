import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences:{image:string,description:string}[] = [
    {
      image:'',
      description:'experience'
    },
    {
      image:'',
      description:'experience'
    }
  ];
}
