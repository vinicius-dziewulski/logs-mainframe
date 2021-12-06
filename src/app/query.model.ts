export class QueryModel {
    query!: string;
    jcl!: string;
    mode: string = "data_filter";
    init_date?: Date;
    final_date?: Date;
}