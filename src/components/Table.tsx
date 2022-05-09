import { useState } from 'react';
import mockdata from '../data.json';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table() {
  const [tableData, setTableData] = useState(mockdata);

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
        sorted = [...tableData].sort((a, b) => {
          if (a[sortField] === null) return 1;
          if (b[sortField] === null) return -1;
          if (a[sortField] === null && b[sortField] === null) return 0;
          return (
            a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
              numeric: true,
            }) * (sortOrder === 'asc' ? 1 : -1)
          );
        });
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
