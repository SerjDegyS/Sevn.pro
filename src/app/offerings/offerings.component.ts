import { Component, OnInit } from '@angular/core';
import { OffertingsService } from '../services/offertings.service';
import { IOffering, IUser } from './models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss'],
  providers: [OffertingsService]
})
export class OfferingsComponent implements OnInit {

  constructor(private offeringService: OffertingsService, private userService: UserService) { }

  user: IUser;
  offerings: IOffering[];
  choosenOffering: IOffering;

  ngOnInit() {
    this.offeringService.getOfferings().subscribe(data => {
      this.offerings = data;
      console.log(data);
      this.choosenOffering = this.offerings[0];
    })

    this.userService.getUser().subscribe(data => {
      this.user = data;
    })

  }

  showDetail(offering) {
    this.choosenOffering = offering;
    console.log(offering);
    
  }

}
