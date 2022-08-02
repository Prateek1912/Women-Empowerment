import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { TraineeStatus } from 'src/app/models/admin/trainee-status';

@Injectable({
  providedIn: 'root'
})
export class AdminTraineesService {
  baseURL: string = 'http://localhost:5000/api/admin/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getApplications(): Observable<any> {
    return this.httpClient.get(this.baseURL + 'trainee/requests', this.httpOptions).pipe(catchError(this.handleError))
  }

  updateApplicationStatus(data: TraineeStatus): Observable<any> {
    return this.httpClient.put<TraineeStatus>(this.baseURL + 'Trainee/Update/Status', data ,this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(err:HttpErrorResponse){
    return throwError(err)
  }
}
