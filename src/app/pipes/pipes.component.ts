import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class SamplePipeComponent implements OnInit{
     
      name = 'angularNg8';
      message = 'Welcome to angular8';
      person = {
        'firstName' : 'John',
        'lastName' : 'Doe'
      }
    ngOnInit(){

      
    }

  
}
