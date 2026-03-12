import {Component, Output, EventEmitter, model} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BotaoComponent} from "../botao/botao.component";
import {FormsModule} from "@angular/forms";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-modal-criar-album',
  standalone: true,
  imports: [CommonModule, RouterModule, BotaoComponent, FormsModule, InputComponent],
  templateUrl: './modal-criar-album.component.html',
  styleUrl: './modal-criar-album.component.css'
})

export class ModalCriarAlbumComponent {

  modalAlbumAberto = false;

  // @ts-ignore
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }

}
