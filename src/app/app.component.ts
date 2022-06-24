import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '3FTribe';
  ngOnInit() {
    AOS.init();
  }
  constructor(){
  }
  onActivate(event:any){
    window.scroll(0,0);
  }
}
