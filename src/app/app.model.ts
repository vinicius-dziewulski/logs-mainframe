class LogInformationsModel{
  consolidatedFileName!: string;
  directLink!: string;
  job!: string;
  sourceFileName!: string;
  timeStamp!: string;
}

export class TableOfContentModel {
  jcl!: string;
  query!: string;
  consolidatedFileName!: string;
  directLink!: string;
  job!: string;
  sourceFileName!: string;
  timeStamp!: string;
}

export class ApiReturn{
  jcl!: string;
  query!: string;
  results!: Array<LogInformationsModel>;
}