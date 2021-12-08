import { Component, OnInit } from '@angular/core';
import { TableOfContentModel } from './app.model';
import { QueryModel } from './query.model';
import { TableContentService } from './services/table-content.service';
import { resultToTableOfContentModel, IResponse } from './interfaces/ITableContent';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  // jclParameter: string = "";
  // keywordParameter: string = "";
  // fromDate?: Date;
  // toDate?: Date;

  showSpinner: boolean = false;

  dataSource: Array<TableOfContentModel> = [];

  query: QueryModel = new QueryModel();

  displayedColumns: string[] = ['jcl', 'query', 'consolidatedFileName', 'job', 'timeStamp', 'directLink'];

  constructor(private tableContentService: TableContentService,
     private formBuilder: FormBuilder){}

  queryForm: FormGroup = this.formBuilder.group({
    jclParameter: new FormControl('', Validators.required),
    keywordParameter: new FormControl('', Validators.required),
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  sendQuery(){
    this.query.jcl = this.queryForm.controls['jclParameter'].value;
    this.query.query = this.queryForm.controls['keywordParameter'].value;
    this.query.init_date = this.queryForm.controls['fromDate'].value;
    this.query.final_date = this.queryForm.controls['toDate'].value;

    console.log(this.query);

    if(this.notValidString(this.query.jcl) || this.notValidString(this.query.query)){
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

  notValidString(text: string): boolean{
    return (text.length == 0 || text.trim().length == 0)
    ? true
    : false;
  }

  minimumFieldsRequired(){
    return (this.notValidString(this.queryForm.controls['jclParameter'].value) && this.notValidString(this.queryForm.controls['keywordParameter'].value))
    ? true
    :false;
  }

  hasError(controlName: string, errorName: string){
    return this.queryForm.controls[controlName].hasError(errorName);
  }

}
