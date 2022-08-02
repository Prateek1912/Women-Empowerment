import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { NgoContactDetails } from 'src/app/models/ngo/ngo-contact-details';
@Injectable({
  providedIn: 'root'
})
export class NgoContactDetailsService {

  baseURL: string = 'http://localhost:5000/api/NgoContactDetail/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  postContactDetails(data: NgoContactDetails): Observable<any> {
    console.log(data)
    return this.httpClient.post<NgoContactDetails>(this.baseURL + 'Add', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  getContactDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err)
  }
}
