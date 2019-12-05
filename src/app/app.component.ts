import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  courses = [1,2];
  viewMode = 'lists';
  courseList = [
      {name : 'course1'},
      {name : 'course2'},
      {name : 'course3'}
  ];

  ngOnInit(){
    // interval is an observable which emits value and we can subsribe to that
    // interval(1000).subscribe(count => {
    //   console.log(count);

    // });

  }

  
}
