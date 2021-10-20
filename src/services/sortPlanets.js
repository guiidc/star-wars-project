function sortPlanets(planets, filters) {
  const { order } = filters;

  if (order.sort === 'ASC') {
    return planets.sort((a, b) => (
      a[order.column].localeCompare(b[order.column], undefined, { numeric: true })
    ));
  }
  return planets.sort((a, b) => (
    b[order.column].localeCompare(a[order.column], undefined, { numeric: true })
  ));
}

export default sortPlanets;
