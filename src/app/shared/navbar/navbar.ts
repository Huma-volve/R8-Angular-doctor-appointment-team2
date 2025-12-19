import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfilePopup } from '../../profile-popup/profile-popup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ProfilePopup],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  showProfile = false;

  constructor(private router: Router) {}

  openProfile() {
    console.log('Profile clicked ✅');
    this.showProfile = true;
  }

  closeProfile() {
    this.showProfile = false;
  }

  goToNotifications() {
    this.router.navigate(['/notifications']);
  }
}
