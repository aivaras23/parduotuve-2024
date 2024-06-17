import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  //Objektas kuriam perduosime informacija apie klaida (komponentai issius, o subscriberiai pasiims)
  public errorEmitter=new EventEmitter<String>();
  constructor() { }
}