/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ColumnInt {
  label: string
  accessor: string
  sortable: boolean
}

export interface TableDataInt {
amount: string
date: string
departments: string
member_name: string
project_name: string
}

function TableBody({ tableData, columns }: { tableData: TableDataInt[], columns: ColumnInt[] }) {
  return (
    <tbody>
      {tableData.map((data: any, index: number) => (
        /*eslint-disable */
        <tr key={index}>
          {columns.map(({ accessor }: { accessor: string; }) => {
            const tData = data[accessor] ? data[accessor] : '——';
            return <td key={accessor}>{tData}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
