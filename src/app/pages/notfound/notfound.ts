import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatingConfigurator } from '../../layout/component/floating-configurator/floating-configurator';


@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterModule, FloatingConfigurator, ButtonModule],
  templateUrl: './notfound.html',
  styleUrl: './notfound.scss'
})
export class Notfound {

}
