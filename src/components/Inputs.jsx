import React from 'react';
import NameInput from './NameInput';
import ActiveFilters from './ActiveFilters';
import OrderInput from './OrderInput';
import NumericFilters from './NumericFilter';

export default function Inputs() {
  return (
    <div>
      <NameInput />
      <NumericFilters />
      <OrderInput />
      <ActiveFilters />
    </div>

  );
}
