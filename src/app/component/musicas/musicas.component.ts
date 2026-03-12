import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../sidenav/sidenav.component";
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";
import {CardComponent} from "../card/card.component";
import {ModalCriarMusicaComponent} from "../modal-criarMusica/modal-criar-musica.component";
import {ModalCriarBandaComponent} from "../modal-criarBanda/modal-criar-banda.component";

@Component({
  selector: 'app-musicas',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent, BotaoComponent, InputComponent, CardComponent, ModalCriarMusicaComponent, ModalCriarBandaComponent],
  templateUrl: './musicas.component.html',
  styleUrl: './musicas.component.css'
})
export class MusicasComponent {

  constructor(private router: Router) {}

  modalMusicaAberto = false;

  abrirModalMusica() {
    this.modalMusicaAberto = true;
  }
  fecharModalMusica() {
    this.modalMusicaAberto = false;
  }

}

