import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserStoreService } from '../services/user-store.service';

export const AuthGuard: CanActivateFn = () => {

  const userStore = inject(UserStoreService);
  const router = inject(Router);

  console.log('AuthGuard called');

  if (userStore.isLoggedIn()) {
    return true;
  }

  console.log('Not authorized');
  router.navigate(['/login']);
  return false;
};
