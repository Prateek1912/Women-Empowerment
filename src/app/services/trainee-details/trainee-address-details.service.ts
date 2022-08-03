import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { TraineeAddressDetails } from 'src/app/models/trainee/trainee-address-details';
@Injectable({
  providedIn: 'root'
})
export class TraineeAddressDetailsService {

  baseURL: string = 'http://localhost:5000/api/TraineeAddressDetails/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  postAddressDetails(data: TraineeAddressDetails): Observable<any> {
    console.log(data)
    return this.httpClient.post<TraineeAddressDetails>(this.baseURL + 'Add', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  getAddressDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }

  handleError(err: HttpErrorResponse) {
    console.log(err)
    return throwError(err)
  }

}
