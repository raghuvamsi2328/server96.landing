import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EstimatorConfig } from '../../models/landing-config.model';

@Component({
  selector: 'app-client-estimator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-estimator.component.html',
  styleUrl: './client-estimator.component.scss'
})
export class ClientEstimatorComponent {
  @Input({ required: true }) config!: EstimatorConfig;

  scopeMultiplier = 3;

  get estimatedHours(): number {
    return this.config.baselineHours * this.scopeMultiplier;
  }

  get estimatedBudgetUsd(): number {
    return this.estimatedHours * this.config.ratePerHourUsd;
  }
}
