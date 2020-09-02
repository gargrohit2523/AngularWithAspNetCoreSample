export interface TableColumn{
    displayName: string;
    propName: string;
    textClassName? : string;
    template? : any;
    headerClass? : string;
    cellClass? : string;
    maxWidth? : string;
    width? : string;
    disableSort? : boolean;
    hide? : boolean
}