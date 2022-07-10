import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, pipe, retry, throwError } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employees'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl).pipe(retry(1), catchError(this.errorHandl));
  }

  public saveEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, employee);
  }

  public deleteEmployee(id: number){
    return this.httpClient.delete(this.baseUrl+'/'+ id, {responseType: 'text'}).pipe(
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

 
