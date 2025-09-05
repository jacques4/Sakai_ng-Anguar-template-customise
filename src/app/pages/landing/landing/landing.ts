import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FeaturesWidget } from '../components/features-widget/features-widget';
import { FooterWidget } from '../components/footer-widget/footer-widget';
import { HeroWidget } from '../components/hero-widget/hero-widget';
import { HighlightsWidget } from '../components/highlights-widget/highlights-widget';
import { PricingWidget } from '../components/pricing-widget/pricing-widget';
import { TopbarWidget } from '../components/topbar-widget/topbar-widget';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, TopbarWidget,
    HeroWidget, FeaturesWidget,
    HighlightsWidget, PricingWidget,
    FooterWidget, RippleModule,
    StyleClassModule, ButtonModule, DividerModule
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
