import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private _pageTitle = signal<string>('Transacciones');
  public pageTitle = computed<string>(() => this._pageTitle());

  public updatePageTitle(title:string):void {
    this._pageTitle.update(() => title);
  }

}
