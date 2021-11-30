import { Component } from '@angular/core';
import { TableOfContentModel } from './app.model';
import { QueryModel } from './query.model';
import { TableContentService } from './services/table-content.service';

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

  showSpinner: boolean = false;

  dataSource: Array<TableOfContentModel> = Array<TableOfContentModel>();

  query: QueryModel = new QueryModel();

  testDisplay: Array<TableOfContentModel> = [{
    jcl: "KO00R01", 
    query: "00064801107480", 
    consolidatedFileName: "dbfs:/mnt/tbalogcons/KO00R01/20210917/KO00R01.csv", 
    directLink: "https://mainframelogs.blob.core.windows.net/tbalogcons/KO00R01/20210917/KO00R01.csv/KO00R01-20210917.csv?se=2021-12-14T20%3A30%3A26Z&sp=r&sv=2020-10-02&ss=b&srt=o&sig=3SRd0VG7pUzuNnQrasm5MVDhn%2BwA4qEfSSuWYGHPeyo%3D",
    job: "JOB30954",
    sourceFileName: "dbfs:/mnt/tbalog/KO00R01/20210917/KO00R01-2021-09-17 05-07-29_JOB30954.json",
    timeStamp: "2021-09-17 05-07-29"
  }];

  displayedColumns: string[] = ['jcl', 'query', 'consolidatedFileName', 'job', 'timeStamp', 'directLink'];

  constructor(private tableContentService: TableContentService){}

  sendQuery(){
    this.showSpinner = true;
    // console.log(this.jclParameter, this.keywordParameter, this.fromDate, this.toDate);
    this.query.jcl = this.jclParameter;
    this.query.keyword = this.keywordParameter;
    this.query.from = this.fromDate;
    this.query.to = this.toDate;
    console.log(this.query);
    // console.log(this.dataSource);

    

    setTimeout(()=>{
      this.dataSource = this.testDisplay;
      this.showSpinner = false;
    }, 2000)
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
