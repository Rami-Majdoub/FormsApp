import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MyForm } from 'src/app/model/myform.model';

const API = environment.API + "forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  public createForm(form: MyForm): Observable<any>{
    return this.httpClient.post(`${API}/`, form);
  }

  public deleteForm(id: string): Observable<any>{
    return this.httpClient.delete(`${API}/${id}`, { responseType: "json" });
  }

  public getFormList(): Observable<any>{
    return this.httpClient.get(`${API}/`, { responseType: "json" });
  }

  public getFormSubmittions(id: string): Observable<any>{
    return this.httpClient.get(`${API}/data/${id}`, { responseType: "json" });
  }

  public getFormToSubmit(id: string): Observable<any>{
    return this.httpClient.get<any>(`${API}/submit/${id}`, { responseType: "json" });
  }
}
