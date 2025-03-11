import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations: { src: string; title: string; description: string }[] = [
    {
      src: 'https://www.upt.ro/images/universitatea-politehnica-timisoara.jpg',
      title: 'Edupedu',
      description: 'This is some thing.',
    },
  ];
}
