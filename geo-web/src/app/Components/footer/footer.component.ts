import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
footer: {name:string,link?:string}[]=[
  {name:'contact',
  },
  {name:'Linkedin',
    link:'https://www.linkedin.com/in/george-bot-49b755258/',
  },
  {name:'Facebook',
    link:'https://www.facebook.com/profile.php?id=100009534380212',
  },
  {name:'Github',
    link:'https://github.com/gg300',
  },
  {name:'contact',
  },
];
}
