import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor (private authService:AuthService, private router:Router, private errorService:ErrorService){

  }


  public onLogin(form:NgForm){
     this.authService.loginUser(form.form.value).subscribe({
      next: (data)=>{ 
        this.router.navigate(['/']);
      },
      error: (error)=>{
        this.errorService.errorEmitter.emit(error.error.text);

      }

     })
  }
}