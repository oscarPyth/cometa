import React from 'react';
import { TableProps } from './interfaces';
import TableRow from './TableRow';

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2  bg-secondary">{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <React.Fragment key={rowIndex}>
              
              {rowIndex < data.length && (
                <tr className="h-1 bg-transparent">
                  <td colSpan={headers.length}></td>
                </tr>
              )}
              <TableRow headers={headers} data={item} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
