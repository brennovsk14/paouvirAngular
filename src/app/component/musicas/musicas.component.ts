import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-musicas',
  standalone: true,
    imports: [CommonModule, RouterModule, SidenavComponent],
  templateUrl: './musicas.component.html',
  styleUrl: './musicas.component.css'
})
export class MusicasComponent {

  constructor(private router: Router) {}

}

