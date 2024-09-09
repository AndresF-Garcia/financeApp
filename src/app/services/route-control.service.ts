import { computed, Injectable, signal } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from '../app.routes';

/*
Servicio para control de el estado de las rutas
*/

@Injectable({
  providedIn: 'root'
})
export class RouteControlService {

  private _currentRoute = signal<Route|null>(null);
  private _previousRoute = signal<Route|null>(null);

  public currentRoute = computed<Route|null>(() => this._currentRoute());
  public previousRoute = computed<Route|null>(() => this._previousRoute());

  constructor() {
    this.changeRouteHistory('Transacciones');
  }

  /**
   * Actualiza el estado de las rutas
   * @param newRouteTitle titulo de la nueva ruta a la que se navega
   */
  public changeRouteHistory(newRouteTitle:string):void {
    this._previousRoute.set(this._currentRoute());
    this._currentRoute.set(this.getRouteItemByTitle(newRouteTitle));
  }

  /**
   * Busca una ruta por su titulo
   * @param title titulo de la ruta a buscar en el Objeto routes (app.routes.ts)
   * @returns item de el objeto routes
   */
  private getRouteItemByTitle(title:string): Route {

    const allFoundRoutes = routes
      .map( route => route.children ?? [] )
      .flat()
      .filter( route => !route.path?.includes(':') )
      .filter( route => route.title === title);

    return allFoundRoutes[0];

  }

}
