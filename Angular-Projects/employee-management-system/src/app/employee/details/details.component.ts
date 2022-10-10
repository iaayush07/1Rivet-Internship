import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public myParam: any;
  constructor(private actrout: ActivatedRoute) { }

  ngOnInit(): void {
    this.actrout.queryParamMap.subscribe((res) => {
      this.myParam = res;
    })
  }

}
