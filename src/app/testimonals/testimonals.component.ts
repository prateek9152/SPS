import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css']
})
export class TestimonalsComponent implements OnInit {
  navbarOpen = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
}
