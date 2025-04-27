import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationResolver implements Resolve<any> {
  constructor(private _http: HttpClient) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this._http.get(`https://rickandmortyapi.com/api/location/${id}`);
  }
}
