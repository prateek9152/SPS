import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../shared/file-upload.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  Users: any = [];
  Weddings: any = [];

  constructor(public fileUploadService: FileUploadService) {
    this.getUsers();
    this.getWeddings();
  }

  ngOnInit() { }

  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    })

  }
getWeddings(){
  this.fileUploadService.getWeddings().subscribe((data)=>{
    this.Weddings = data['weddings'];
  })
}
}

