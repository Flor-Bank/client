import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';
import CheckIconComponent from '../../../../shared/icons/checkIcon.component';

@Component({
  selector: 'user-become-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIconComponent, CheckIconComponent],
  templateUrl: './become-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ featherAirplay, heroUsers })],
})
export default class BecomeClientComponent {
  constructor(private fb: FormBuilder) {}
  public becomeClientForm: FormGroup = this.fb.group({});

  onSubmit(): void {}
}


