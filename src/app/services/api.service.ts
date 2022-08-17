import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  products:any = 
  [
    {
      id: 'wf90gc',
      name:"WILDFIT 90 GROUP COACHING",
      imageUrl: 'item1',
      price: 895,
      description: [
        'The WILDFIT 90 Day Experience',
        'Online Journal & Success Tracking Tools',
        'Weekly Question Database',
        'Living WILDFIT eBook',
        '28 Group Coaching Calls with Coach Aseema',
        'Private Facebook Group',
        'Facebook Lives in your Private Group with Coach Aseema',
        'Private Client Portal with all your Coaching Calls and Facebook Lives with lifetime access',
        'Exclusive Facebook Alumni Group'
      ]
    },
    {
      id: 'wf1o1p',
      name:"WILDFIT 90 1:1 PREMIUM COACHING",
      imageUrl: 'item2',
      price: 1995,
      description: [
        'VIP One on One Coaching with Video',
        'The WILDFIT90 Day Experience',
        'Online Journal & Success Tracking Tools',
        'Daily Inspiration Tips',
        'Weekly Question Database',
        'Living WILDFIT eBook',
        '28 One on One Coaching Calls with Coach Aseema. The calls will be scheduled to suit your calendar',
        'Support with grocery shopping and recipes',
        'Private Facebook Group',
        'Facebook Lives in your Private Group with Coach Aseema',
        'Support for unlimited queries over WhatsApp',
        'Private Client Portal with all your Coaching Calls and Facebook Lives with lifetime access',
        'Exclusive Facebook Alumni Group',
        'Living WILDFIT Support after the 90 days for 2 months to ensure you continue the progress of the program into everyday life.'
        ]
    },
    {
      id: 'livwfc',
      name:"LIVING WILDFIT COACHING",
      imageUrl: 'item3',
      price: 27,
      description: [
        'Coaching support for clients who have completed the WILDFIT 90 challenge for the living WILDFIT phase',
        'This is a monthly membership',
        ]
    }
  ];
  getProduct() {
    return this.products;
  }
}
