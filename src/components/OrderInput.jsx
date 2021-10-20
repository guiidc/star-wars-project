import React, { useContext } from 'react';
import Context from '../context/Context';
import { sortOptions } from '../services/inputsOptions';

export default function OrderInput() {
  const { filters, setFilters } = useContext(Context);

  const handleSubmit = (e) => {
    const { target } = e;
    e.preventDefault();

    setFilters({
      ...filters,
      order: { column: target.column.value, sort: target.type.value },
    });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <select
          data-testid="column-sort"
          name="column"
        >
          {sortOptions.map((option, index) => (
            <option key={ index }>{ option }</option>
          ))}
        </select>
        <div>
          <label htmlFor="sort-radio">
            Ascendente
            <input
              data-testid="column-sort-input-asc"
              type="radio"
              name="type"
              value="ASC"
            />
          </label>
          <label htmlFor="sort-radio">
            Descendente
            <input
              data-testid="column-sort-input-desc"
              type="radio"
              name="type"
              value="DESC"
            />
          </label>
        </div>
        <button
          data-testid="column-sort-button"
          type="submit"
        >
          Ordenar
        </button>
      </form>
    </div>
  );
}
