import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreComponent } from "./store/store.component";

@Injectable({
  providedIn: 'root'
})
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
