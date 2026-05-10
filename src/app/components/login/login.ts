import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel} from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  private router = inject(Router)

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.router.navigate(["/welcome"])
    }
  }

  ValidateCredentials(form:NgForm,email:NgModel,password:NgModel){
    localStorage.setItem("user",email.value)
    this.router.navigate(["/welcome"])
  }
  
}
