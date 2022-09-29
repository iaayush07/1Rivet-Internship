import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

 // public subject = new Subject();
  // public subject = new BehaviorSubject(0);
  // public subject = new ReplaySubject(2);
  public subject = new Subject();
  
  // a:number=10;
  // b:number=10;
  public observer1:any;
  public observer2:any;
  public status:any;
  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.observer1 = this.subject.subscribe({
      next:(msg)=>{
        console.log("Next: "+msg);
        this.apiservice.Print(`Next: ${msg}`,'LiId')
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Completed")
      }
    })
    this.subject.next(1)
    this.subject.next(2)
    this.subject.complete()
    this.subject.next(3)
    
    this.observer2 = this.subject.subscribe({
      next:(msg)=>{
        // console.log("Second Next: "+msg);
        this.apiservice.Print(msg,'LiId')
      },
      error:(err)=>{
        console.log(err);
        this.status='error'
      },
      complete:()=>{
        console.log("Completed")
        this.status='complete'
      
      }
    })
    this.subject.next(4);
  }


}

