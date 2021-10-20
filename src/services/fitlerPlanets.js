import sortPlanets from './sortPlanets';

export default function filterPlanets(planets, filters) {
  const { filterByName: { name }, filterByNumericValues } = filters;

  let newPlanets = [...planets];
  newPlanets = sortPlanets(newPlanets, filters);

  filterByNumericValues.forEach(({ column, comparison, value }) => {
    if (comparison === 'maior que') {
      newPlanets = planets.filter((planet) => planet[column] > Number(value));
    }
    if (comparison === 'menor que') {
      newPlanets = planets.filter((planet) => planet[column] < Number(value));
    }
    if (comparison === 'igual a') {
      newPlanets = planets.filter((planet) => planet[column] === value);
    }
  });

  if (name) {
    return newPlanets.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())
    ));
  }
  return newPlanets;
}
