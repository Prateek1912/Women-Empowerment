import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { NgoOrganizationDetails } from 'src/app/models/ngo/ngo-organization-details';
@Injectable({
  providedIn: 'root'
})
export class NgoOrganizationDetailsService {

  baseURL: string = 'http://localhost:5000/api/NgoDetail/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  postOrganizationDetails(data: NgoOrganizationDetails): Observable<any> {
    console.log(data)
    return this.httpClient.post<NgoOrganizationDetails>(this.baseURL + 'Add', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  getOrganizationDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err)
  }


}
