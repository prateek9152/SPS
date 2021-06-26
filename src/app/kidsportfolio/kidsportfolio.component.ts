import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from "../shared/file-upload.service";
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-kidsportfolio',
  templateUrl: './kidsportfolio.component.html',
  styleUrls: ['./kidsportfolio.component.css']
})
export class KidsportfolioComponent implements OnInit {
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
  showTab = 1;
      div1:boolean=true;
    div2:boolean=true;
    div3:boolean=true;
    showProjects = false;
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
  update(){
    this.display = !this.display;
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
   div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false
    }
}
