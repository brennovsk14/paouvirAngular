import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent],
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.css'
})
export class AlbunsComponent {

  constructor(private router: Router) {}

}

