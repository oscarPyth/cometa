import classNames from "classnames";
import { TableRowProps } from "./interfaces";

const TableRow: React.FC<TableRowProps> = ({ headers, data, onClick }) => {
  return (
    <tr
      className={classNames('my-2', { 'cursor-pointer': onClick })}
      onClick={() => onClick && onClick(data)}
    >
      {headers.map((header, colIndex) => (
        <td key={colIndex} className="px-4 py-2 bg-secondary my-3">
          {data[header.column]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
