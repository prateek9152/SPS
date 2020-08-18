import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../shared/file-upload.service";
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Users: any = [];

  constructor(public fileUploadService: FileUploadService) {
    this.getUsers();

   }

  ngOnInit() {
  }
  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    })

  }
//   customOptions: OwlOptions  = {
//     loop: true,
//     mouseDrag: false,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true

// }
}
