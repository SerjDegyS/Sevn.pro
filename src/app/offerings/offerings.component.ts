import { Component, OnInit } from '@angular/core';
import { OffertingsService } from '../services/offertings.service';
import { Offering } from './model';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss'],
  providers: [OffertingsService]
})
export class OfferingsComponent implements OnInit {

  constructor(private offeringService: OffertingsService) { }

  offerings: Offering[];
  choosenOffering: Offering;

  ngOnInit() {
    this.offeringService.getOfferings().subscribe(data => {
      this.offerings = data as Offering[];
      console.log(data);
      this.choosenOffering = this.offerings[0];
    })
  }

  showDetail(offering) {
    this.choosenOffering = offering;
    console.log(offering);
    
  }

}
