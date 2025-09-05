import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-best-selling-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule],
  templateUrl: './best-selling-widget.html',
  styleUrl: './best-selling-widget.scss'
})
export class BestSellingWidget {

      menu = null;

    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
