import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, BotaoComponent, InputComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  perfil = [
    { perfil: 'Banda', valor: 'bd' },
    { perfil: 'Artista', valor: 'at' },
    { perfil: 'Ouvinte', valor: 'ov' }
  ];

}
