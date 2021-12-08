import { Component } from '@angular/core';
import { TableOfContentModel } from './app.model';
import { QueryModel } from './query.model';
import { TableContentService } from './services/table-content.service';
import { resultToTableOfContentModel, IResponse } from './interfaces/ITableContent';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  jclParameter: string = "";
  keywordParameter: string = "";
  fromDate?: Date;
  toDate?: Date;

  isDisabled: boolean = true;

  // jclParameter = new FormControl('', Validators.required);
  // keywordParameter = new FormControl('', Validators.required);;
  // fromDate?: Date;
  // toDate?: Date;

  showSpinner: boolean = false;

  dataSource: Array<TableOfContentModel> = [];

  query: QueryModel = new QueryModel();

  displayedColumns: string[] = ['jcl', 'query', 'consolidatedFileName', 'job', 'timeStamp', 'directLink'];

  constructor(private tableContentService: TableContentService){}

  sendQuery(){
    this.query.jcl = this.jclParameter;
    this.query.query = this.keywordParameter;
    this.query.init_date = this.fromDate;
    this.query.final_date = this.toDate;


    if(this.checkStringInput(this.query.jcl) || this.checkStringInput(this.query.query)){
      alert("Por favor, preencha os campos obrigatórios!");
    }else{
      this.showSpinner = true;      
      this.tableContentService.sendQuery(this.query)
      .then((response: any) => {

        var tableContent = resultToTableOfContentModel(response.jcl, response.query, response.results);

        this.dataSource = tableContent;

        if(tableContent.length == 0){
          alert("Informação não encontrada.");
        }

        this.showSpinner = false;
      })
      .catch((error: any) => {
        console.error(error);
        alert("Ocorreu um erro por favor tente novamente.");
        this.showSpinner = false;
      });
    }
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  checkStringInput(text: string): boolean{
    return (text.length == 0 || !text.trim())
    ? true
    : false;
  }

  checkMinimumFields(){
    return (this.checkStringInput(this.jclParameter) && this.checkStringInput(this.keywordParameter))
    ? true 
    :false;
  }

}
