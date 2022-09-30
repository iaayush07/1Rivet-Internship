import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-observal-example',
  templateUrl: './observal-example.component.html',
  styleUrls: ['./observal-example.component.scss']
})
export class ObservalExampleComponent implements OnInit {

  status :any;
  constructor(private apiservice :  ApiService) { }

 
  obs = new Observable(observer => {
    console.log('Observable starts');

    setTimeout(() => {
      observer.next('1');  
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
      observer.complete()
    }, 5000);

  });

  ngOnInit() {
    this.obs.subscribe(
      val => {
        console.log(val);
        this.apiservice.Print(`value : ${val}`,'LiId')
      }, //next callback
      error => {
        console.log('error');
        this.status='error'
      }, //error callback
      () => {
        console.log('Completed');
        this.status='complete'
      } //complete callback
    );
  }

}
