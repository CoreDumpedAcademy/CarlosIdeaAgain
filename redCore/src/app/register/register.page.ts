import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private auth: AuthserviceService) { }

  ngOnInit() {
  }

  register(form) {
    console.log(form.form.value);
  }

  goBack() {
    this.router.navigateByUrl('login');
  }

}
