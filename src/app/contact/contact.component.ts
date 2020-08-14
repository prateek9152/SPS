import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contatForm: FormGroup;
  constructor(private fb:FormBuilder,private contact:ContactService) {
   }

  ngOnInit() {
    this.contatForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.compose([Validators.required,Validators.email])]],
      subject: [''],
      message: ['',[Validators.required]]
    });
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
}
