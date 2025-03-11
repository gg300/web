import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
urls = ['https://camo.githubusercontent.com/fbb49b7aa96af5acc8330d1aee41a5ac2151a7701a5ec8d3642fcf3aae16d800/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3931392f3931393832362e706e67','https://camo.githubusercontent.com/fbb49b7aa96af5acc8330d1aee41a5ac2151a7701a5ec8d3642fcf3aae16d800/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3931392f3931393832362e706e67','https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png','https://developer.chrome.com/static/blog/css-wrapped-2023/image/csswrapped_header.svg']
}
