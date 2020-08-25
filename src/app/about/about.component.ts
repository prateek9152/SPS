import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  navbarOpen = false;
  isShowDiv: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
}
