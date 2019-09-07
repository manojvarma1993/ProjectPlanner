import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate,ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate
{
  constructor()
  {

  }

 canActivate(activateRoute:ActivatedRouteSnapshot)
 {
  if (activateRoute.params['id']>0)
  {
    return true;
  }
 return false;
 } 
  
}
