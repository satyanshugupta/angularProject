import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showAlert: boolean = false;
  alertMsg: string = "Please wait! We are logging you in";
  alertColor: string = 'blue';
  inSubmission: boolean = false;

  credentials = {
    email: '',
    password: '',
  }

  constructor(private auth: AngularFireAuth) {

  }

  async login() {
    // console.log("User Logged in successfully",this.credentials)
    this.inSubmission = true;
    this.alertMsg = "Please wait! We are logging you in";
    this.showAlert = true;
    this.alertColor = 'blue';
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )

    } catch (error) {
      // console.log(...error)
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occured! Please try again later.';
      this.alertColor = 'red';
      this.showAlert = true;
      return;
    }
    this.alertColor = 'green';
    this.alertMsg = 'You have successfully logged in.';
  }
}
