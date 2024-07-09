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
  }
  
export interface TableRowProps {
    headers: TableHeaders[];
    data: TableData;
  }