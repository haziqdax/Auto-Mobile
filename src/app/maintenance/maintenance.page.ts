import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

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
