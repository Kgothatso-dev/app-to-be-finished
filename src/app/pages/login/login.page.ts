import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticatinService } from 'src/app/service/authentication/authenticatin.service';
import { Router } from '@angular/router';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { IUser } from 'src/app/files/interface';
import { LocalService } from 'src/app/service/local/local.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: IUser;
  spinner: boolean = false;
  loginForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private _loginService: LoginService,
      private _userService: UserService,
      private _localDB: LocalService,
      private toastController: ToastController,
      private menuController: MenuController,
      public modalController: ModalController
  ) { }

  ngOnInit() {
      this.createForm();
  }

  createForm() {
      this.loginForm = this.formBuilder.group({
          email: new FormControl(null, Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')])),
          password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      });
  }

  validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
              control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
              this.validateAllFormFields(control);
          }
      });
  }

  setUser(id: string){
      this._userService.getUser(id).subscribe(
          response => {
              this.user = response as IUser;
              this._localDB.setLocal('user', this.user);
              this.goToHome();
          }
      );
  }

  goToHome(){
      this.router.navigateByUrl('tabs/home').then(
          resp => {
              this.loginForm.reset();
          }
      );
  }

// Login
login(){
  this.validateAllFormFields(this.loginForm);
      if (this.loginForm.valid) {
          this.spinner = true;
          this._loginService.signInEmail(this.loginForm.value.email, this.loginForm.value.password).then(
              response => {
                  this.setUser(response.user.uid);
              },
              error => {
                  this.spinner = false;
                  this.presentToast(error.message);
              }
          ).catch(
              error => {
                  console.log(error.message);
              }
          );
      }
}

  async presentToast(message: string) {
      const toast = await this.toastController.create({
        message,
        duration: 5000,
        color: 'danger'
      });
      toast.present();
  }


}
