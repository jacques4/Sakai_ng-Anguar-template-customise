import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FloatingConfigurator } from '../../../layout/component/floating-configurator/floating-configurator';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [ButtonModule, RouterModule, RippleModule, FloatingConfigurator, ButtonModule],
  templateUrl: './access.html',
  styleUrl: './access.scss'
})
export class Access {

}
