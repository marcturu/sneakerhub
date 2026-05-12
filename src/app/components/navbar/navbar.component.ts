import { Component, EventEmitter, Input, Output } from '@angular/core';

type ActiveView = 'list' | 'template' | 'reactive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() activeView: ActiveView = 'list';
  @Output() navigate = new EventEmitter<ActiveView>();

  goTo(view: ActiveView): void {
    this.navigate.emit(view);
  }
}
