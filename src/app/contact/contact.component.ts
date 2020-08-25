import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contatForm: FormGroup;
  navbarOpen = false;
  isShowDiv: boolean = true;
  constructor(private fb:FormBuilder,private contact:ContactService) {
   }

  ngOnInit() {
    this.contatForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.compose([Validators.required,Validators.email])]],
      message: ['',[Validators.required]]
    });
  }
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
  contactForm(contatForm){
    console.log(contatForm);
    this.contact.PostMessage(contatForm).subscribe(response => {
      location.href = ''
      console.log(response);
      }, error => {
        console.warn(error.responseText)
        console.log({error});

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
