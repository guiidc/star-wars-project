import React, { useContext } from 'react';
import Context from '../context/Context';
import { columnsOptions, comparisonOptions } from '../services/inputsOptions';
import removeUsedColumns from '../services/removeUsedColumns';

function NumericFilters() {
  const { filters, setFilters } = useContext(Context);

  const handleSubmit = (e) => {
    const { target } = e;
    e.preventDefault();

    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: target.column.value,
          comparison: target.comparison.value,
          value: target.number.value,
        },
      ],
    });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <select data-testid="column-filter" name="column">
          {removeUsedColumns(columnsOptions, filters).map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
        <select data-testid="comparison-filter" name="comparison">
          {comparisonOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
        <input
          name="number"
          data-testid="value-filter"
          type="number"
          min="0"
        />
        <button
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>

      </form>
    </div>
  );
}

export default NumericFilters;
