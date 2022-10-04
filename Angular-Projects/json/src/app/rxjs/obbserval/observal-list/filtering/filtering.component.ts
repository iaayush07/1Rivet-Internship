import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, fromEvent, interval, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  status : any;
  constructor() { }

  ngOnInit(): void {
    //filter
    of(0,1,2,3,4)
    .pipe(filter(x => x % 2 === 1))
    .subscribe(x => console.log('value is:',x))

    //TackeUnit

    const source = interval(1000);
    const clicks = fromEvent(document,'click');
    const result = source.pipe(takeUntil(clicks));
    result.subscribe(x => console.log('value is:',x))

    //debounce Time
    // const e1 = document.getElementsByTagName('input');
    // const clicks = fromEvent(e1,'keydown');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe(x => console.log('value is:',x))
  }

}
