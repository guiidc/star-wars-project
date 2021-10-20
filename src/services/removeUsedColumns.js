function removeUsedColumns(columns, filters) {
  const { filterByNumericValues } = filters;
  const newColumns = [...columns];
  filterByNumericValues.forEach(({ column }) => {
    if (columns.includes(column)) {
      newColumns.splice(newColumns.indexOf(column), 1);
    }
  });
  return newColumns;
}

export default removeUsedColumns;
