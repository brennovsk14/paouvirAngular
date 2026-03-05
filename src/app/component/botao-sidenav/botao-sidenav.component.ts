import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botao-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './botao-sidenav.component.html',
  styleUrl: './botao-sidenav.component.css'
})
export class BotaoSidenavComponent {

  @Input() texto?: string;
  @Input() link?: string;

  constructor(private router: Router) {}

  navegarPara() {
    if (this.link) {
      this.router.navigate([this.link]);
    }
  }

}

