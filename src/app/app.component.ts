import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [1,2];
  viewMode = 'lists';
  courseList = [
      {name : 'course1'},
      {name : 'course2'},
      {name : 'course3'}
  ];
}
