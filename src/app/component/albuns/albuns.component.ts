import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../sidenav/sidenav.component";
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";
import {CardComponent} from "../card/card.component";
import {ModalCriarAlbumComponent} from "../modal-criarAlbum/modal-criar-album.component";

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent, BotaoComponent, InputComponent, CardComponent, ModalCriarAlbumComponent],
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.css'
})
export class AlbunsComponent {

  constructor(private router: Router) {}

  modalAlbumAberto = false;


  abrirModalAlbum() {
    this.modalAlbumAberto = true;
  }
  fecharModalAlbum() {
    this.modalAlbumAberto = false;
  }

}

