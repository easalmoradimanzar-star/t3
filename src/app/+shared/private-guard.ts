import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const ptivateGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('auth-token')){
    return true;
  }
  if(localStorage.getItem('auth-token')){
    sessionStorage.setItem('auth-token',localStorage.getItem('auth-token')??'');
    return true;
  }
  const router=inject(Router);
  router.navigateByUrl('/login');
  return false;
};
