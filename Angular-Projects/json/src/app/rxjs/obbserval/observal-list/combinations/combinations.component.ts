import { Component, OnInit } from '@angular/core';
import { concat, forkJoin, merge, of, timer } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-combinations',
  templateUrl: './combinations.component.html',
  styleUrls: ['./combinations.component.scss']
})
export class CombinationsComponent implements OnInit {


  status: any;
  constructor(public apiservice: ApiService) { }

  ngOnInit(): void {


    //Concat
    let list1 = of(2, 4, 6, 8);
    let list2 = of(1, 3, 5);
    concat(list1, list2).subscribe((data) => {
      this.apiservice.Print(`value : ${data}`, 'LiId')
    })


    // Merge

    let stud1 = of('a', 'b', 'c');
    // let stud2 = interval(3000);
    let stud3 = of(100, 200, 300)
    merge(stud1, stud3).subscribe((data) => {
      ;
      this.apiservice.Print(`value : ${data}`, 'LiId')
    })




    // ForkJoin
    const observable = forkJoin({
      foo: of(1, 2, 3, 4),
      bar: Promise.resolve(8),
      baz: timer(5000)
    });
    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('comepele')
    });
  }

}