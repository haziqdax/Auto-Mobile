import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {

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
