import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MusicasComponent} from "../../component/musicas/musicas.component";

@Component({
  selector: 'app-view-musicas',
  standalone: true,
  imports: [CommonModule, RouterModule, MusicasComponent],
  templateUrl: './view-musicas.component.html',
  styleUrl: './view-musicas.component.css'
})
export class ViewMusicasComponent {

}

