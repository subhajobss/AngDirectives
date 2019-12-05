import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import{ map,filter } from 'rxjs/operators';
@Component({
  selector: 'sample-obs',
  templateUrl: './sample-observable.component.html'
  //styleUrls: ['./app.component.scss']
})
export class SampleObservableComponent implements OnInit,OnDestroy {
  
    private obsSubscription : Subscription;
  ngOnInit(){
    //interval is an observable which emits value and we can subsribe to that
    // this.obsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // How to create custom observable and subscribe to that? By using Rxjs ' Observable.create'

   const customIntervalObservable = Observable.create(observer =>{
        let count = 0;
        setInterval(()=>{
            // below line shows how observable emits an event. This can be data or error or complete 
            observer.next(count);
           
            if(count > 8){
                observer.error(new Error('Error Occured while emitting data!!!'));
            }
            if(count == 9){
                // when error occurs , this block will never excuted, complete will never be called.
                observer.complete();
            }
           
            count++;
        },1000)
    });

   

    this.obsSubscription =  customIntervalObservable.pipe(filter(data=>{
        return data > 0 ;
    }),map( data =>{
        return 'Round : ' + data ;
    })).subscribe(data=>{
        console.log(data);
    },error =>{
        console.log(error.message);
    },()=>{
        console.log('Completed!!!!!');
    })
  }


  ngOnDestroy() : void {
      this.obsSubscription.unsubscribe();
  }

  
}
