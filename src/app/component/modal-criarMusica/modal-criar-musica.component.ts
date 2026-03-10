import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BotaoComponent} from "../botao/botao.component";

@Component({
  selector: 'app-modal-criar-musica',
  standalone: true,
  imports: [CommonModule, RouterModule, BotaoComponent],
  templateUrl: './modal-criar-musica.component.html',
  styleUrl: './modal-criar-musica.component.css'
})
export class ModalCriarMusicaComponent {
  fecharModal() {
    // Logic to close modal
  }
}
