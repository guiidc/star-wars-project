import React, { useContext } from 'react';
import Context from '../context/Context';
import filterPlanets from '../services/fitlerPlanets';

export default function Table() {
  const { data, planets, filters } = useContext(Context);
  if (!data.length) return <div>loading...</div>;

  const tableHeadContent = Object.keys(data[0]);
  const residentsIndex = tableHeadContent.indexOf('residents');
  tableHeadContent.splice(residentsIndex, 1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { tableHeadContent.map((key) => <th key={ key }>{ key }</th>) }
          </tr>
        </thead>
        <tbody>
          { filterPlanets(planets, filters).map((planet) => (
            <tr key={ planet.name }>
              {tableHeadContent.map((key, index) => {
                if (!index) {
                  return <td data-testid="planet-name" key={ index }>{ planet[key] }</td>;
                }
                return <td key={ index }>{ planet[key] }</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
