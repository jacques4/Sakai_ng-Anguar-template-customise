import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FloatingConfigurator } from '../../../layout/component/floating-configurator/floating-configurator';


@Component({
  selector: 'app-error',
  imports: [ButtonModule, RippleModule, RouterModule, FloatingConfigurator, ButtonModule],
  standalone: true,
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class Error {

}
