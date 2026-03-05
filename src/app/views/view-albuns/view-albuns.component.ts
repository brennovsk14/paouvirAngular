import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {AlbunsComponent} from "../../component/albuns/albuns.component";

@Component({
  selector: 'app-view-albuns',
  standalone: true,
  imports: [CommonModule, RouterModule, AlbunsComponent],
  templateUrl: './view-albuns.component.html',
  styleUrl: './view-albuns.component.css'
})
export class ViewAlbunsComponent {

}

