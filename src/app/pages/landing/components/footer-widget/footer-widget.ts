import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-widget',
  imports: [RouterModule],
  templateUrl: './footer-widget.html',
  styleUrl: './footer-widget.scss'
})

export class FooterWidget {
    constructor(public router: Router) {}
}

