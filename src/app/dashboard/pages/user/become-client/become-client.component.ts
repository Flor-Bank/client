import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'user-become-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './become-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BecomeClientComponent {
  constructor(private fb: FormBuilder) {}
  public becomeClientForm: FormGroup = this.fb.group({});

  onSubmit(): void {}
}
