import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BotaoComponent} from "../../component/botao/botao.component";
import {FormsModule} from "@angular/forms";
import {InputComponent} from "../../component/input/input.component";

@Component({
  selector: 'app-modal-criar-musica',
  standalone: true,
  imports: [CommonModule, RouterModule, BotaoComponent, FormsModule, InputComponent],
  templateUrl: './modal-criar-musica.component.html',
  styleUrl: './modal-criar-musica.component.css'
})
export class ModalCriarMusicaComponent {

  modalAberto = false;

  // @ts-ignore
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}
