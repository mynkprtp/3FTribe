import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wildfit',
  templateUrl: './wildfit.component.html',
  styleUrls: ['./wildfit.component.css']
})
export class WildfitComponent implements OnInit {

  player: YT.Player | undefined;
  id:string = 'JcpOPYjnt1A';

  savePlayer(player:any){
    this.player=player;
    console.log('player interface', player);
  }

  onStateChange(event: any){
    console.log('player state', event.data);
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
