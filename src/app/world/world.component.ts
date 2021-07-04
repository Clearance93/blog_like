import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {


  pic1: string = "assets/images/world.jpg";
  pic2: string = "assets/images/terminator.jpeg";
  pic3: string = "assets/images/Voice assistance.jpg"
  pic4: string = "assets/images/Cripsr.jpg";
  pic: string = "assets/images/Robot assistance.jpg"
  pic5: string = 'assets/images/Augmented.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
