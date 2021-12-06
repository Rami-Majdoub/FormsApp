import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const API = environment.API + "forms/";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  public getFormSubmittions(id: string): Observable<any>{
    return this.httpClient.get(`${API}data/${id}`, { responseType: "json" });
  }

  public getFormToSubmit(id: string): Observable<any>{
    return this.httpClient.get(`${API}user/${id}`, { responseType: "json" });
  }
}
