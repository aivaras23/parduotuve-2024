import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private authService:AuthService){}

  public onRegister(f:NgForm){
    console.log(f.form.value);
    this.authService.registerUser(f.form.value).subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    });
  }

}
