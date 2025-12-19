import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],           // ✅ only once
  templateUrl: './notification.html',
  styleUrls: ['./notification.scss'], // ✅ plural
})
export class Notification {
  notifications = [
    {
      type: 'upcoming',
      title: 'Upcoming Appointment',
      message: 'Reminder: You have an appointment with Dr. Emily Walker.',
      time: '1h',
      icon: 'fa-clock',
    },
    {
      type: 'completed',
      title: 'Appointment completed',
      message:
        'You have successfully booked your appointment with Dr. Emily Walker.',
      time: '3h',
      icon: 'fa-check',
    },
    {
      type: 'cancelled',
      title: 'Appointment Cancelled',
      message:
        'You have successfully cancelled your appointment with Dr. David Patel.',
      time: '4h',
      icon: 'fa-xmark',
    },
  ];
}
