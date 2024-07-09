
interface DataItem {
  [key: string]: any;
}

export interface TableData {
    [key: string]: any; 
  }
  export interface TableHeaders {
    name: string;
    column: string 
  }

export interface TableProps {
    headers: TableHeaders[]; 
    data: TableData[]; 
    onRowClick?: (item: any) => void;
  }
  
export interface TableRowProps {
    headers: TableHeaders[];
    data: TableData;
    onClick?: (item: any) => void;
  }