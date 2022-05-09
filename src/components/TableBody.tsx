function TableBody({ tableData, columns }) {
  return (
    <tbody>
      {tableData.map((data, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <tr key={index}>
          {columns.map(({ accessor }) => {
            const tData = data[accessor] ? data[accessor] : '——';
            return <td key={accessor}>{tData}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
