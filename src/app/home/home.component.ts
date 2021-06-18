import { Component, OnInit,ViewChild,ElementRef,HostListener } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { FileUploadService } from '../shared/file-upload.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('closebutton',{static:false}) closebutton;
  @ViewChild('stickyMenu',{static:false}) menuElement:ElementRef;

  safeUrl:SafeResourceUrl;
  sticky: boolean = false;
  elementPosition: any;
  isShow: boolean;
  topPosToStartShowing = 100;
  Users: any = [];
  currDiv: string = 'A';
  navbarOpen = false;
  isShowDiv: boolean = true;
  isShowStudio: boolean = true;
  selectedIndex = -1;
  showTab = 1;

  constructor(private _sanitizer:DomSanitizer,public fileUploadService: FileUploadService, private router:Router,private route: ActivatedRoute) {
    this.getUsers();

  }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/AXgBwQpRec8?autoplay=1&mute=1');
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  public onSave(){
    this.closebutton.nativeElement.click();
  }
  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    })

  }
  showDiv(index) {
    this.selectedIndex = index;
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
    @HostListener('window:scroll')
    checkScroll() {

      // window의 scroll top
      // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      console.log('[scroll]', scrollPosition);

      if (scrollPosition >= this.topPosToStartShowing) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }

    // TODO: Cross browsing
    gotoTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    ShowDiv() {
      this.isShowDiv =  this.isShowDiv ? false : true;
     }
toggleNavbar(){
  this.navbarOpen = !this.navbarOpen;
}
ShowStudio(){
  this.isShowStudio = this.isShowStudio ? false : true;
}
tabToggle(index){
  this.showTab =index;
}
video(event){
  event.toElement.play();
}
}
