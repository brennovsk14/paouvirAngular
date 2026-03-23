import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";
import {ModalCriarAlbumComponent} from "../../modals/modal-criarAlbum/modal-criar-album.component";
import {ModalCriarMusicaComponent} from "../../modals/modal-criarMusica/modal-criar-musica.component";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-uma-banda',
  standalone: true,
  imports: [CommonModule, CardComponent, BotaoComponent, InputComponent, ModalCriarAlbumComponent, ModalCriarMusicaComponent, SidenavComponent, RouterLink],
  templateUrl: './uma-banda.component.html',
  styleUrl: './uma-banda.component.css'
})
export class UmaBandaComponent {

  modalAlbumAberto = false;

  abrirModalAlbum() {
    this.modalAlbumAberto = true;
  }
  fecharModalAlbum() {
    this.modalAlbumAberto = false;
  }

  modalMusicaAberto = false;


  abrirModalMusica() {
    this.modalMusicaAberto = true;
  }
  fecharModalMusica() {
    this.modalMusicaAberto = false;
  }

}
