import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

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
