import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Route, Router, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { filter } from 'rxjs';

/*
Servicio para control de el estado de las rutas
*/

@Injectable({
  providedIn: 'root'
})
export class RouteControlService {

  private router = inject(Router);

  private _previousUrl = signal<string>('');
  private _currentUrl = signal<string>('');
  private _currentPageTitle = signal<string>('');

  public previousUrl = computed(() => this._previousUrl());
  public currentUrl = computed(() => this._currentUrl());
  public currentPageTitle = computed(() => this._currentPageTitle());

  constructor() {
    this.setRouterListener();
  }

  private setRouterListener():void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this._currentUrl.update(value => {
          this._previousUrl.set(value);
          return event.url
        });
        console.log(this._previousUrl());
        console.log(this._currentUrl());
      };
    });
  }

  public setPageTitle(title:string):void {
    this._currentPageTitle.set(title);
  }



}
