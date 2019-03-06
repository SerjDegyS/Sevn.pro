import { Component, OnInit, Input } from '@angular/core';
import { IOffering, IUser } from '../models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offering-detail',
  templateUrl: './offering-detail.component.html',
  styleUrls: ['./offering-detail.component.scss']
})
export class OfferingDetailComponent implements OnInit {

  @Input() offering: IOffering;
  user: IUser;
  offeringState: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.getUser().subscribe(data => {
      this.user = data;
      // console.log (this.user);
    })
  }

  hasUserOffer(offering): boolean {
    // console.log(this.user.offerings.includes(this.offering));
    
    return !(this.user.offerings.filter(offer => offering.id === offer.id).length === 0);

  }

}
