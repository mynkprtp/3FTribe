import { Component } from '@angular/core';
import * as AoS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3FTribe';
  ngOnInit(){
    AoS.init();
  }
}
