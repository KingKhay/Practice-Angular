import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {IPerson} from "../../rooms/services/rooms.service";
import {catchError, Observable, shareReplay, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  handleError = (error: any) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Client Side Error :${error.message()}`
    }
    else{
      errorMessage = `Server Side Error :${error.message()}`
    }
    return throwError(() => {return errorMessage});
}

  constructor(private http: HttpClient) { }

  getPeople(): Observable<IPerson[]>{
    const headers = new HttpHeaders({'Key':'Value'}).append('Token','TokenValue');

    return this.http.get<IPerson[]>("/api/v1/people",{headers: headers}).pipe(shareReplay(), catchError(this.handleError));
  }

  addPerson(person: IPerson) {
    console.log("Post Method Called")
    return this.http.post<IPerson>("/api/v1/people", person);
  }

  updatePerson(id: string, person: IPerson) {
    return this.http.put<IPerson>(`/api/v1/people/${id}`, person);
  }

  getPhotos(){
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',{
      reportProgress: true,
    })
    return this.http.request(request);
  }
}
