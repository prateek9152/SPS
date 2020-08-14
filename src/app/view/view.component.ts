import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../shared/file-upload.service";

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
}
