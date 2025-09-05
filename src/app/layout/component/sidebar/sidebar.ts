import { Component, ElementRef } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [Menu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
    constructor(public el: ElementRef) {}
}
