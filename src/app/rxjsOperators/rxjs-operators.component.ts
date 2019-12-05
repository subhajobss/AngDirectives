import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import{ map,filter } from 'rxjs/operators';
@Component({
  selector: 'operator',
  templateUrl: './rxjs-operators.component.html'
  //styleUrls: ['./app.component.scss']
})
export class SampleOperatorComponent implements OnInit{
     
    numbers = [-1,1,2,3];


    ngOnInit(){

        const filtered = this.numbers.filter( n=> n>-1);
        alert('numbers'+ filtered);
        // const items =  filtered.map(n => {
        // const obj = {value : n};
        //     return obj;
        // });


        // If code block has a single line, and we want to return some value, we can avoid return keyword and curly baces.
        const items =  this.numbers.filter( n=> n>-1).map(n => ({value : n}));
       console.log(items);
    }

  
}
