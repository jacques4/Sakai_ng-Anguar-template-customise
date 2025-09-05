import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-notifications-widget',
  standalone: true,
  imports: [ButtonModule, MenuModule],
  templateUrl: './notifications-widget.html',
  styleUrl: './notifications-widget.scss'
})
export class NotificationsWidget {

    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
