import { TableOfContentModel } from '../app.model';

export interface ITableContent{
    jcl: string;
    query: string;
    consolidatedFileName: string;
    directLink: string;
    job: string;
    sourceFileName: string;
    timeStamp: string;
}

export class IResponse{
    jcl: string | undefined;
    query: string | undefined;
    results: Array<ApiResult> | undefined;
}

class ApiResult{
    consolidatedfilename!: string;
    directlink!: string;
    job!: string;
    sourcefilename!: string;
    timestamp!: string;
}

export function resultToTableOfContentModel(jcl: string, keyword: string, results: Object) : Array<TableOfContentModel>{
    var tableContent: Array<TableOfContentModel> = new Array<TableOfContentModel>();

    let castResult: Array<ApiResult> = Object.assign(new Array<ApiResult>(), results);

    for(var key in castResult){
        var line: TableOfContentModel = {
            jcl: jcl,
            query: keyword,
            consolidatedFileName: castResult[key].consolidatedfilename, 
            directLink: castResult[key].directlink,
            job: castResult[key].job,
            sourceFileName: castResult[key].sourcefilename,
            timeStamp: castResult[key].timestamp
        }; 

        tableContent.push(line);
    }

    return tableContent;
}