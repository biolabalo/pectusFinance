/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { ColumnInt } from './TableBody';

// eslint-disable-next-line max-len
function TableHead({ columns, handleSorting }: { columns: ColumnInt[], handleSorting : (accessor: string, sortOrder: string) => void }) {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: string) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField && sortField === accessor && order === 'asc'
              ? 'up'
              : sortField && sortField === accessor && order === 'desc'
                ? 'down'
                : 'default'
            : '';
          return (
            <th
              key={accessor}
              onClick={() => {
                if (sortable) handleSortingChange(accessor);
              }}
              className={cl}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
