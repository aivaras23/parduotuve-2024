import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  public result:string|null=null;
  public x:number|null=null;
  public y:number|null=null;


  constructor (private calculatorService:CalculatorService){

  }

  public calculate(){
    if (this.x!=null && this.y!=null){
      this.calculatorService.sendCalculate(this.x,this.y).subscribe((data:any)=>{
          this.result="Gautas rezultatas: "+data.rezultatas;
      });
    }
  }

}
