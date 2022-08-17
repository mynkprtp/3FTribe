import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  openModal(content: any) {
    this.modalService.open(content, {
      size: 'lg',
      scrollable: true,
      backdropClass: 'blurred-background',
      centered: true,
    });
  }

  public sendEmail(contactData) {
    const { fname, lname, email, subject, tellMore, category, country } =
      contactData.value;
    var contactParams = {
      f_name: fname,
      l_name: lname,
      user_email: email,
      subject,
      tellMore,
      category,
      country,
    };
    // this.alertWithError();
    emailjs
      .send(
        'service_4rafoe9',
        'template_f16yrph',
        contactParams,
        'q9ByIurclDpgefsyW'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.alertWithSuccess();
          contactData.reset();
          console.log(result.text);
        },
        (error) => {
          this.alertWithError();
          console.log(error.text);
        }
      );
  }

  alertWithSuccess() {
    Swal.fire('Success', 'You have successfully taken the first step towards your transformation. I will get back to you as quickly as I can !', 'success');
  }

  alertWithError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops... Something went wrong!',
      text: 'Please try again !!!'
    })
  }
}
