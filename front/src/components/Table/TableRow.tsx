import React from 'react';
import { TableRowProps } from './interfaces';

const TableRow: React.FC<TableRowProps> = ({ headers, data }) => {
  return (
    <tr className='my-2'>
      {headers.map((header, colIndex) => (
        <td key={colIndex} className="px-4 py-2 bg-secondary my-3">{data[header.column]}</td>
      ))}
    </tr>
  );
};

export default TableRow;
