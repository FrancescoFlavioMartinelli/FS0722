import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user:User|undefined

  constructor(private us:UserService, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("TEST");
    
    //lettura sincrona - quando cambio rotta se il component è lo stesso non ripassiamo da ngOnInit e non rieseguo questa assegnazione
    // let id = this.ar.snapshot.params["id"]
    // this.user = this.us.getUserById(id)

    this.ar.params.subscribe((p)=>{
      console.log(p['id']);
      this.user = this.us.getUserById(p['id'])
    })
  }

}
