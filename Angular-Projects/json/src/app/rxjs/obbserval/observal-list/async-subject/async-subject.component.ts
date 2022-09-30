import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  public subject = new AsyncSubject();


  
  // a:number=10;
  // b:number=10;
  public observer1:any;
  public observer2:any;
  public status:any;
  constructor(private apiservice : ApiService) { }

  
  ngOnInit(): void {
    this.subject.next(6)
    this.observer1 = this.subject.subscribe({
      next:(msg)=>{
        console.log("Next: "+msg);
        setTimeout(() => {
          this.apiservice.Print(`Next: ${msg}`,'LiId')
        }, 1000);
        
      },
      error:(err)=>{
        console.log(err);
        this.status='error'

      },
      complete:()=>{
        console.log("complete")
        setTimeout(() => {
          this.status='complete'
        }, 2000);
        
      }
      
    })
    this.subject.next(1)
    this.subject.next(2)
    this.subject.next(3)
    this.subject.next(4)
    this.subject.complete()
    this.subject.next(5)
  }

  ngAfterViewInit(): void{
  //   this.observer1 = this.subject.subscribe({
  //     next:(msg)=>{
  //       console.log("Next: "+msg);
  //       this.apiservice.Print(`Next: ${msg}`,'LiId')
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //       this.status='error'

  //     },
  //     complete:()=>{
  //       console.log("complete")
  //       this.status='complete'
  //     }
  //   })
  //   this.subject.next(1)
  //   this.subject.next(2)
  //   this.subject.complete()
  //   this.subject.next(3)
  }
    // this.observer2 = this.subject.subscribe({
    //   next:(msg)=>{
    //     console.log("Second Next: "+msg);
    //     this.apiservice.Print(msg,'LiId')
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //     this.status='error'
    //   },
    //   complete:()=>{
    //     // console.log("Completed")
    //     this.status='complete'
      
    //   }
    // })
    // this.subject.next(4);
  }
