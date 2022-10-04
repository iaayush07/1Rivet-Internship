import { Component, OnInit } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {//map

    // of(1,2,3,4)
    // .pipe(map((ev) => ev * 10))
    // .subscribe(x => console.log('value is:', x))

    //tap

    const source = of(1,2,3,4,5);
    source.pipe(
      tap(n => {
        if(n > 3){
           throw new TypeError(`value ${n} is grether than 100`)
        }
      })
    )
    .subscribe({
         next: value => console.log('value is:', value),
         error: err => console.log('error mess',err)    
    })
  }

}