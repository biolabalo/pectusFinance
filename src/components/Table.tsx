import * as React from 'react';
import mockdata from '../data.json';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table() {
  const [tableData, setTableData] = React.useState(mockdata);

  const columns = [
    { label: 'Departments', accessor: 'departments', sortable: true },
    { label: 'Project name', accessor: 'project_name', sortable: true },
    { label: 'Amount', accessor: 'amount', sortable: true },
    { label: 'Date', accessor: 'date', sortable: true },
    { label: 'Member name', accessor: 'member_name', sortable: true },
  ];

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      let sorted;

      if (sortField === 'amount') {
        sorted = sortOrder === 'asc' ? [...tableData].sort((a, b) => parseFloat(a.amount.replace(/(^\$|,)/g, '')) - parseFloat(b.amount.replace(/(^\$|,)/g, '')))
          : [...tableData].sort((a, b) => parseFloat(b.amount.replace(/(^\$|,)/g, '')) - parseFloat(a.amount.replace(/(^\$|,)/g, '')));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sorted = [...tableData].sort((a: any, b: any) => (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        ));
      }

      setTableData(sorted);
    }
  };

  return (
    <div className="table_container">
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </div>
  );
}

export default Table;
