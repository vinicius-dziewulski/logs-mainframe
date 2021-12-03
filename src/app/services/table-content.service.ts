import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ITableContent } from '../interfaces/ITableContent';
import { QueryModel } from '../query.model';
import { ApiReturn } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class TableContentService {

  constructor(private httpClient: HttpClient) { }

  sendQuery(query: QueryModel){
    const headers = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '87b917430d294c88a67008de74aa8e70',
      'Origin': 'https://ebm-cta-test-datasquad-apim.developer.azure-api.net',
      'Cache-Control': 'no-cache'
    }

    const static_data = {"query":"-803","jcl":"PA04R01","mode":"data_filter","init_date":"2021-09-14","final_date":"2021-09-17"};

    const reponseType = 'json';

    let options = { headers, reponseType };

    return this.httpClient.post<ApiReturn>(`${API_PATH}`, static_data, options).toPromise();
  }
}
