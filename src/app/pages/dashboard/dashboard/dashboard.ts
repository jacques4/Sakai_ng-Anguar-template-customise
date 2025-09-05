import { Component } from '@angular/core';
import { StatsWidget } from '../components/stats-widget/stats-widget';
import { RecentSalesWidget } from '../components/recent-sales-widget/recent-sales-widget';
import { BestSellingWidget } from '../components/best-selling-widget/best-selling-widget';
import { RevenueStreamWidget } from '../components/revenue-stream-widget/revenue-stream-widget';
import { NotificationsWidget } from '../components/notifications-widget/notifications-widget';


@Component({
  selector: 'app-dashboard',
  imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
