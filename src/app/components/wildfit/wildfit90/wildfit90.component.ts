import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wildfit90',
  templateUrl: './wildfit90.component.html',
  styleUrls: ['./wildfit90.component.css']
})
export class Wildfit90Component implements OnInit {
  show1:boolean =true;
  show2:boolean =true;
  show3:boolean =true;
  show4:boolean =true;
  show5:boolean =true;
  show6:boolean =true;
  show7:boolean =true;

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  openLg(content:any) {
    this.modalService.open(content, {scrollable:true,backdropClass:'blurred-background',centered:true});
  }


}
