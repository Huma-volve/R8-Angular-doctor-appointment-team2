
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-popup',
  imports: [],
  templateUrl: './setting-popup.html',
  styleUrl: './setting-popup.scss',
})
export class SettingPopup {
 constructor(private location: Location,private router: Router) {}

  goBack() {
    this.location.back();
  }

goToPassword() {
  this.router.navigate(['/password-management']);
}
}
