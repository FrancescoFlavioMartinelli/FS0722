import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(f:NgForm){
    console.log(f, f.value);
    this.as.login(f.value).subscribe((res)=>{
      this.router.navigate(['/homeRouting'])
    })
  }

}
