import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from "../shared/file-upload.service";
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {
  @ViewChild('closebutton',{static: false}) closebutton;
  showModal: boolean;
  Wedding:any = [];
  Users: any = [];
  @ViewChild('nav', {static: false}) ds: NgImageSliderComponent;
  title = 'Ng Image Slider';
  showSlider = true;
  sliderWidth: Number = 940;
  sliderImageWidth: Number = 250;
  sliderImageHeight: Number = 200;
  sliderArrowShow: Boolean = true;
  sliderInfinite: Boolean = false;
  sliderImagePopup: Boolean = true;
  sliderAutoSlide: Boolean = false;
  sliderSlideImage: Number = 1;
  sliderAnimationSpeed: any = 1;
  imageObject: Array<object> = [];
  navbarOpen = false;
  isShowDiv: boolean = true;
  display = false;
  display1 = false;
  display2 = false;
  display3 = false;
  display4 = false;
  showTab = 1;
  showDiv = {
    previous : false,
    current : false,
    next : false,
    fourth:false
  }
  constructor(public fileUploadService: FileUploadService) {
    this.getUsers();
   }

  ngOnInit() {

  }

  onChangeHandler() {
    this.getUsers();
    this.showSlider = false;
    setTimeout(() => {
        this.showSlider = true;
    }, 10);
}
  show(){
    this.showModal = true;
  }
  hide(){
    this.showModal = false;
  }
  public onSave(){
    this.closebutton.nativeElement.click();
  }
getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    })

  }
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  tabToggle(index){
		this.showTab =index;
	  }
    showProject(){
      this.display = !this.display;
     }
     showProject1(){
      //  this.showProjects = true;
       this.display1 = !this.display1;
     }
     showProject2(){
      //  this.showProjects = true;
       this.display2 = !this.display2;
     }

     showProject3(){
      //  this.showProjects = true;
       this.display3 = !this.display3;
     }
     showProject4(){
      //  this.showProjects = true;
       this.display4 = !this.display4;
     }
}
