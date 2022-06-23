import { Component, OnInit} from '@angular/core';

import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  faPlus: IconDefinition = faPlus;

  constructor() {
  }

  ngOnInit() {}

}
