import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-become-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './become-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BecomeClientComponent {}
