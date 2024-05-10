import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navmenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavmenuComponent { }
