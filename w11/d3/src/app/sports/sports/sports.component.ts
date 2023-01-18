import { Component, OnInit } from '@angular/core';
import { Sport, SportsService } from '../sports.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports:Sport[] = []

  constructor(private ss: SportsService) { }

  ngOnInit(): void {
    // this.ss.getSports().subscribe((res)=>{
    //   if(!res){
    //     //il token non è stato trovato e il metodo ci ha dato undefined
    //     this.sports = [{
    //       id:0,
    //       nome: "ERRORE"
    //     }]
    //   }
    //   else {
    //     res.subscribe((s)=>{
    //       this.sports = s
    //     })
    //   }
    // })
    //è importante usare il catchError nella pipe perchè il token è aggiunto dall'interceptor in base al login, se il token non dovesse essere inserito correttamente allora l'errore ci arriva dalla response
    this.ss.getSports().pipe(catchError((err)=>{
      console.log(err);
      this.sports = [{id:0, nome:"ERRORE"}]
      throw err
    })).subscribe((res)=>{
      console.log(res);
      this.sports = res
    })
  }

}
