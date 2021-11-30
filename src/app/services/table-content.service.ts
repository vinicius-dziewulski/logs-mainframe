import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ITableContent } from '../interfaces/ITableContent';
import { QueryModel } from '../query.model';

@Injectable({
  providedIn: 'root'
})
export class TableContentService {

  constructor(private httpClient: HttpClient) { }

  sendQuery(query: QueryModel){
    const headers = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '87b917430d294c88a67008de74aa8e70',
    }
    return this.httpClient.post<ITableContent[]>(`${API_PATH}`, {"query":"-803","jcl":"PA04R01","mode":"data_filter","init_date":"2021-09-14","final_date":"2021-09-17"}).toPromise();
  }
}
