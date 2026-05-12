import { Component } from '@angular/core';

type ActiveView = 'list' | 'template' | 'reactive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeView: ActiveView = 'list';

  onNavigate(view: ActiveView): void {
    this.activeView = view;
  }
}
