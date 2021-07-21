import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { serviceID, templateID, userID } from './emailjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    public inputName: any;
    public inputEmail: any;
    public inputSubject: any;
    public inputMessage: any;
    public form: any;
    bikeform: FormGroup;

  constructor() { 
    this.bikeform = new FormGroup({
      inputName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      inputEmail: new FormControl('', [Validators.required, Validators.email]),
      inputSubject: new FormControl('', [Validators.required]),
      inputMessage: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }  

  submitRegistration(e: Event): void {
    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, userID)
     .then((result: EmailJSResponseStatus) => {
       alert('Sent!');
       this.form.reset();
       }
     )
     .catch((err:Error) => {
       alert(JSON.stringify(err));
     });

  }


}

