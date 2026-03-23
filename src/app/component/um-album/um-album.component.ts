import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";
import {ModalCriarAlbumComponent} from "../../modals/modal-criarAlbum/modal-criar-album.component";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {ModalCriarMusicaComponent} from "../../modals/modal-criarMusica/modal-criar-musica.component";
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-um-album',
  standalone: true,
  imports: [CommonModule, CardComponent, BotaoComponent, InputComponent, ModalCriarAlbumComponent, SidenavComponent, ModalCriarMusicaComponent],
  templateUrl: './um-album.component.html',
  styleUrl: './um-album.component.css'
})
export class UmAlbumComponent {

  modalMusicaAberto = false;


  abrirModalMusica() {
    this.modalMusicaAberto = true;
  }
  fecharModalMusica() {
    this.modalMusicaAberto = false;
  }

}
