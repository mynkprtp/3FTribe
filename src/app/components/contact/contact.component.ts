import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  submit(contactForm:any){
    console.log(contactForm);
  }
  ngOnInit(): void {
  }

}
