import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http:HttpClient) { 

  }

  public sendCalculate(x:number, y:number){
    return this.http.post("http://localhost:3999/skaiciuokle/skaiciuoti",{
      "x":x,
      "y":y
    });

  }
}
