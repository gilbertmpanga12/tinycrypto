import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { take, map, tap} from 'rxjs/operators';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements  CanActivateChild {
 constructor(private router: Router, private service: MainService){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.getUser()){
      return true;
    }else{
      this.router.navigate(['/auth', 'signin']);
      return false;
    }
    
  }
  
}