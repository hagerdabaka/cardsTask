import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  cardsData:any=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getCards();
  }
 
  getCards(){
    this.api.getCards().subscribe((res)=>{
      this.cardsData=res.data
      console.log(this.cardsData);
    })
  }

}
