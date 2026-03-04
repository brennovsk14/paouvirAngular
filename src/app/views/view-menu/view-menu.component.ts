import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MenuComponent} from "../../component/menu/menu.component";

@Component({
  selector: 'app-view-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './view-menu.component.html',
  styleUrl: './view-menu.component.css'
})
export class ViewMenuComponent {

}
