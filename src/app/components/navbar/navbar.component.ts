import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from '../../services/user-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private userStore: UserStoreService
  ) {
    this.isLoggedIn$ = this.userStore.isLoggedIn$;
  }

  logout(): void {
    this.userStore.logout();
    this.router.navigate(['/login']);
  }
}
