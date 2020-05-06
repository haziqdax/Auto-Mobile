import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  maintenancetab(){
    this.router.navigateByUrl('/maintenance');

    
  }

  
  upcomingtab(){
    this.router.navigateByUrl('/upcoming');

    
  }

  nearbytab(){
    this.router.navigateByUrl('/nearby');

    
  }
  
  emergencytab(){
    this.router.navigateByUrl('/emergency');

    
  }
}
