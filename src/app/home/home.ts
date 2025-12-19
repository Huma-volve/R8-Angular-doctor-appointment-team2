import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from "../shared/navbar/navbar";
import { Footer } from "../shared/footer/footer";

declare const L: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements AfterViewInit {
  constructor(private router: Router) {}

  doctors = [
    {
      name: 'Robert Johnson',
      specialty: 'Orthopedic',
      hospital: 'El-Nasr Hospital',
      rating: 4.8,
      time: '9:30am - 8:00pm',
      price: 350,
      image: '/assets/Rectangle 1673.png',
    },
    {
      name: 'Robert Johnson',
      specialty: 'Orthopedic',
      hospital: 'El-Nasr Hospital',
      rating: 4.8,
      time: '9:30am - 8:00pm',
      price: 350,
      image: '/assets/Rectangle 1673.png',
    },
    {
      name: 'Robert Johnson',
      specialty: 'Orthopedic',
      hospital: 'El-Nasr Hospital',
      rating: 4.8,
      time: '9:30am - 8:00pm',
      price: 350,
      image: '/assets/Rectangle 1673.png',
    },
    {
      name: 'Robert Johnson',
      specialty: 'Orthopedic',
      hospital: 'El-Nasr Hospital',
      rating: 4.8,
      time: '9:30am - 8:00pm',
      price: 350,
      image: '/assets/Rectangle 1673.png',
    },
  ];

  ngAfterViewInit() {
    setTimeout(() => this.initMap(), 0);
  }

  initMap() {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => this.loadMap(pos.coords.latitude, pos.coords.longitude),
      () => this.loadMap(30.0444, 31.2357) // Cairo fallback
    );
  }

  loadMap(lat: number, lng: number) {
    const map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
    }).setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);
  }

  goToSearch() {
    this.router.navigate(['/search-doctor']);
  }

    stars = Array(5);

  avatars = [
    '/assets/Image Grup.png',
    '/assets/Image Grup.png',
    '/assets/Image Grup.png',
    '/assets/Image Grup.png',
    '/assets/Image Grup.png'
  ];


  faqs = [
    { question: 'What is this app used for?' },
    { question: 'Is the app free to use?' },
    { question: 'How can I find a doctor?' },
    { question: 'Can I cancel my appointment?' },
    { question: 'What payment are supported' },
    { question: 'How do I edit my profile?' }
  ];
}
