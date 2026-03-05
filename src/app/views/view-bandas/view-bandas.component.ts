import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BandasComponent} from "../../component/bandas/bandas.component";

@Component({
  selector: 'app-view-bandas',
  standalone: true,
  imports: [CommonModule, RouterModule, BandasComponent],
  templateUrl: './view-bandas.component.html',
  styleUrl: './view-bandas.component.css'
})
export class ViewBandasComponent {

}

