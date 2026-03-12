import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../sidenav/sidenav.component";
import {BotaoSidenavComponent} from "../botao-sidenav/botao-sidenav.component";
import {BotaoComponent} from "../botao/botao.component";
import {ModalCriarAlbumComponent} from "../modal-criarAlbum/modal-criar-album.component";
import {ModalCriarBandaComponent} from "../modal-criarBanda/modal-criar-banda.component";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent, BotaoComponent, ModalCriarAlbumComponent, ModalCriarBandaComponent, CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  modalBandaAberto = false;
  modalAlbumAberto = false;


  abrirModalAlbum() {
    this.modalAlbumAberto = true;
  }
  fecharModalAlbum() {
    this.modalAlbumAberto = false;
  }

  abrirModalBanda() {
    this.modalBandaAberto = true;
  }
  fecharModalBanda() {
    this.modalBandaAberto = false;
  }

}
