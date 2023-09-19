import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.getUsers();
  }

  private handleError(error: any) {
    console.log('An error occurred:', error);
    return error
  }
  
  getUsers(){
    this.http.get('https://localhost:5001/api/users').pipe(
      catchError(this.handleError)
      ).subscribe(
        response=>{
          this.users = response
        }
      );
  }
}
