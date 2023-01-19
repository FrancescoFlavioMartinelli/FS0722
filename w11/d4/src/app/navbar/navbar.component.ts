import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged = false;

  nomeUser = "";

  constructor(private as:AuthService) { }

  ngOnInit(): void {
    this.as.authObs.subscribe((res)=>{
      if(res) {
        this.logged = true
        this.nomeUser = res.user.nome
      } else {
        this.logged = false,
        this.nomeUser = ""
      }
    })
    // this.as.loggedObs.subscribe((res)=>{
    //   this.logged = res
    // })
  }

  logout() {
    //TODO
  }

}
