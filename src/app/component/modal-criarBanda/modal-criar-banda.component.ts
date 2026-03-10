import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BotaoComponent} from "../botao/botao.component";

@Component({
  selector: 'app-modal-criar-banda',
  standalone: true,
  imports: [CommonModule, RouterModule, BotaoComponent],
  templateUrl: './modal-criar-banda.component.html',
  styleUrl: './modal-criar-banda.component.css'
})
export class ModalCriarBandaComponent {
  fecharModal() {
    // Logic to close modal
  }
}
