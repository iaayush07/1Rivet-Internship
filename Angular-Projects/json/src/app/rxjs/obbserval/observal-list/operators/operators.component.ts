import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, of, take } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  status :any;
  constructor(private apiservice : ApiService ) { }

  ngOnInit(): void {
  
   // of
    of(1,2,3)
    .pipe(map((x) => x * x))
    .subscribe({
      next: (value) =>{
        // console.log('value is:',value)
        this.apiservice.Print(`value : ${value}`,'LiId')
      }
    });

    // formEvent
    let button1 = document.getElementsByTagName('button');
    const click = fromEvent(button1,'click');
    click.subscribe((data)=>{
       console.log('value is:',data);
      //  this.apiservice.Print(`value : ${data}`,'LiId')
    });
    

    //Interval
    const number = interval(2000);
    const tanumb = number.pipe(take(4));
    tanumb.subscribe(x =>{
      console.log('value is:',x);
    });



    
  }


}
