import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { RotateDirective } from '../../directives/rotate.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, RotateDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  rotate: number | undefined;
  step: number | undefined;

  constructor(private auth: AuthService) {}
  getUsername() {
    return this.auth.getUsername();
  }

  onRotationChange(rotation: number) {
    this.rotate = rotation;
  }
}
