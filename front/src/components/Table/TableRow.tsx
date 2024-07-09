import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { TableRowProps } from './interfaces';

const TableRow: React.FC<TableRowProps> = ({ headers, data, onClick }) => {
  return (
    <tr
      className={classNames(
        'my-2 cursor-pointer bg-secondary hover:bg-[#FAFDEA] hover:text-[#504c3d]', 
        { 'cursor-pointer': onClick }
      )}
      onClick={() => onClick && onClick(data)}
    >
      {headers.map((header, colIndex) => (
        <td key={colIndex} className="px-4 py-2  my-3 text-center">
          {typeof data[header.column] === 'boolean' ? (
            <FontAwesomeIcon
              icon={faWineBottle}
              className={classNames('text-xl', {
                'text-green-500': data[header.column],
                'text-red-500': !data[header.column],
              })}
            />
          ) : (
            data[header.column]
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
