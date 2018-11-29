import { Component, OnInit } from '@angular/core';
declare var TweenMax:any;
declare var TimelineLite:any;

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //bouton decouvrir
    const discover = document.getElementById("discover");
    const presentation = document.getElementById("presentation");
    discover.addEventListener("click", function() {
      presentation.classList.remove("hidden");
    });
  }

  goDown() {
    let pos = document.getElementById("presentation");
    let presentation= document.getElementById("presentation");
    let tl = new TimelineLite();
    tl.from(pos, 1)
    .to(presentation, 1);
    }
  }