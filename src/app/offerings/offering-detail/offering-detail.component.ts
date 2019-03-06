import { Component, OnInit, Input } from '@angular/core';
import { Offering } from '../model';

@Component({
  selector: 'app-offering-detail',
  templateUrl: './offering-detail.component.html',
  styleUrls: ['./offering-detail.component.scss']
})
export class OfferingDetailComponent implements OnInit {

  @Input() offering: Offering;

  constructor() { }

  ngOnInit() {
    console.log(this.offering);
    
  }

}
