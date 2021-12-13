import { Component, ViewChild } from '@angular/core';
import { TableOfContentModel } from './app.model';
import { QueryModel } from './query.model';
import { TableContentService } from './services/table-content.service';
import { resultToTableOfContentModel } from './interfaces/ITableContent';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { validateDate } from './custom-date.validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showProgressBar: boolean = false;

  dataSource = new MatTableDataSource<TableOfContentModel>(new Array<TableOfContentModel>());

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  title: string = 'logs-mainframe';

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  query: QueryModel = new QueryModel();

  displayedColumns: string[] = ['jcl', 'query', 'consolidatedFileName', 'job', 'timeStamp', 'directLink'];

  constructor(private tableContentService: TableContentService,
    private formBuilder: FormBuilder,) { }

  queryForm: FormGroup = this.formBuilder.group({
    jclParameter: new FormControl('', Validators.required),
    keywordParameter: new FormControl('', Validators.required),
    fromDate: new FormControl(),
    toDate: new FormControl()
  }, {validators: validateDate});

  sendQuery() {
    this.dataSource.data = [];

    this.query.jcl = this.queryForm.controls['jclParameter'].value;
    this.query.query = this.queryForm.controls['keywordParameter'].value;
    this.query.init_date = this.queryForm.controls['fromDate'].value;
    this.query.final_date = this.queryForm.controls['toDate'].value;

    this.showProgressBar = true;
    this.tableContentService.sendQuery(this.query)
      .then((response: any) => {

        var tableContent = resultToTableOfContentModel(response.jcl, response.query, response.results);

        this.dataSource.data = tableContent;

        if (tableContent.length == 0) {
          alert("Nenhum dado foi encontrado.");
        }

        this.showProgressBar = false;
      })
      .catch((error: any) => {
        console.error(error);
        alert("Ocorreu um erro por favor tente novamente.");
        this.showProgressBar = false;
      });
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  hasError(controlName: string, errorName: string) {
    return this.queryForm.controls[controlName].hasError(errorName);
  }

  hasErrorFormGroup(errorName: string) {
    return this.queryForm.hasError(errorName);
  }
}
