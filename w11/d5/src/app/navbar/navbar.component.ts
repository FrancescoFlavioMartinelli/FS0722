import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  logged = false;

  constructor(private as:AuthService) { }

  ngOnInit(): void {
    this.as.logged.subscribe((res)=>{
      this.logged = res
    })
  }


}
