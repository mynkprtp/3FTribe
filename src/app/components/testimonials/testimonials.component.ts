import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  player: YT.Player | undefined;
  vid_array:Array<string> = ['pI5tKywZ9dE','COzZ2bi9Gqw','Li0TkYvlTuw','Qf_bg2E7rg4','aJzXpznWhBQ'];
  loaded = false;
  savePlayer(player:any){
    this.loaded = true;
    this.player=player;
    console.log('player interface', player);
  }

  onStateChange(event: any){
    console.log('player state', event.data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
