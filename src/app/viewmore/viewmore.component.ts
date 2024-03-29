import { Component, OnInit,ViewChild } from '@angular/core';
import { FileUploadService } from "../shared/file-upload.service";
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {

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

}
