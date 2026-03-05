import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bandas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bandas.component.html',
  styleUrl: './bandas.component.css'
})
export class BandasComponent {

  constructor(private router: Router) {}

}

