import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wildfit',
  templateUrl: './wildfit.component.html',
  styleUrls: ['./wildfit.component.css']
})
export class WildfitComponent implements OnInit {

  player: YT.Player | undefined;
  id:string = 'JcpOPYjnt1A';
  loaded=false;
  isReadMore1 = true
  isReadMore2 = true;
  isReadMore3 = true;

  savePlayer(player:any){
    this.loaded=true;
    this.player=player;
    console.log('player interface', player);
  }

  onStateChange(event: any){
    console.log('player state', event.data);
  }
  constructor(private modalService:NgbModal) { 
  }

  showText1() {
    this.isReadMore1=!this.isReadMore1;
  }
  
  showText2() {
    this.isReadMore2=!this.isReadMore2;
  }
  
  showText3() {
    this.isReadMore3=!this.isReadMore3;
  }
 
  openLg(content:any) {
    this.modalService.open(content, {size:'lg',scrollable:true});
  }

  ngOnInit(): void {
  }

}
