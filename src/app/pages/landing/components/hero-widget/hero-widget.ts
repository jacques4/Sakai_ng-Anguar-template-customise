import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-hero-widget',
  imports: [ButtonModule, RippleModule],
  templateUrl: './hero-widget.html',
  styleUrl: './hero-widget.scss'
})
export class HeroWidget {

}
