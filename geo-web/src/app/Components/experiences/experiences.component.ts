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
      image:'https://media.licdn.com/dms/image/v2/C4E0BAQGGySdJKRLMRA/company-logo_200_200/company-logo_200_200/0/1631336479763?e=1747872000&v=beta&t=uugYqbb5MWGLKW1Ywv3hPELnPbYVifcbViQ6PKYs2_4',
      description:'Verindyen Intern'
    },
    {
      image:'https://lh3.googleusercontent.com/p/AF1QipMKApAm-lT5IVRPvU-xgu6Y2lDGRc2YRj9cQc-h=s1360-w1360-h1020',
      description:'Liga AC Volunteer'
    },
    {
    image:'https://media.licdn.com/dms/image/v2/D4D0BAQEbZxy1DD58gA/company-logo_200_200/company-logo_200_200/0/1699530411284/therapime_logo?e=1747872000&v=beta&t=WnVwLUIAO1HNmS5nBMwE3nUYKLMD5AAY-N4K6wGuzD4',
  description:'Front End at Therapi'
    },
    {
      image:'public/assets/images/regina.png',
      description:'whatever'
    },
  ];
}
