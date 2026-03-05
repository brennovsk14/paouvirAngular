import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {PlaylistsComponent} from "../../component/playlists/playlists.component";

@Component({
  selector: 'app-view-playlists',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaylistsComponent],
  templateUrl: './view-playlists.component.html',
  styleUrl: './view-playlists.component.css'
})
export class ViewPlaylistsComponent {

}

