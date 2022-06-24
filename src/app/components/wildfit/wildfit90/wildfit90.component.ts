import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wildfit90',
  templateUrl: './wildfit90.component.html',
  styleUrls: ['./wildfit90.component.css']
})
export class Wildfit90Component implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  openLg(content:any) {
    this.modalService.open(content, {size:'lg',scrollable:true});
  }


}
