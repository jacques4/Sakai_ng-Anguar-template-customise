import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FloatingConfigurator } from '../../../../layout/component/floating-configurator/floating-configurator';


@Component({
  selector: 'app-topbar-widget',
  imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, FloatingConfigurator],
  templateUrl: './topbar-widget.html',
  styleUrl: './topbar-widget.scss'
})
export class TopbarWidget {
  constructor(public router: Router) {}
}
