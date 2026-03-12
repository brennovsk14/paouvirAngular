import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../sidenav/sidenav.component";
import {InputComponent} from "../input/input.component";
import {BotaoComponent} from "../botao/botao.component";
import {CardComponent} from "../card/card.component";
import {ModalCriarBandaComponent} from "../modal-criarBanda/modal-criar-banda.component";

@Component({
  selector: 'app-bandas',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent, InputComponent, BotaoComponent, CardComponent, ModalCriarBandaComponent],
  templateUrl: './bandas.component.html',
  styleUrl: './bandas.component.css'
})
export class BandasComponent {

  modalBandaAberto = false;

  constructor(private router: Router) {}

  abrirModalBanda() {
    this.modalBandaAberto = true;
  }
  fecharModalBanda() {
    this.modalBandaAberto = false;
  }

}

