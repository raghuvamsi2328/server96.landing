import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { TickerItemConfig } from '../../models/landing-config.model';

@Component({
  selector: 'app-client-ticker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-ticker.component.html',
  styleUrl: './client-ticker.component.scss'
})
export class ClientTickerComponent implements OnInit, OnDestroy {
  @Input({ required: true }) items: TickerItemConfig[] = [];

  activeIndex = 0;
  private tickerId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.tickerId = setInterval(() => {
      if (this.items.length === 0) {
        return;
      }

      this.activeIndex = (this.activeIndex + 1) % this.items.length;
    }, 2400);
  }

  ngOnDestroy(): void {
    if (this.tickerId) {
      clearInterval(this.tickerId);
    }
  }
}
