import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CertificatesComponent} from '../app/Components/certificates/certificates.component'
import {EducationComponent} from '../app/Components/education/education.component'
import {ExperiencesComponent} from '../app/Components/experiences/experiences.component'
import {FooterComponent} from '../app/Components/footer/footer.component'
import {ProfilesComponent} from '../app/Components/profiles/profiles.component'
import {SkillsComponent} from '../app/Components/skills/skills.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CertificatesComponent,EducationComponent,ExperiencesComponent,FooterComponent,ProfilesComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geo-web';
}
