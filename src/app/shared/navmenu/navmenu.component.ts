import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navmenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavmenuComponent { }
