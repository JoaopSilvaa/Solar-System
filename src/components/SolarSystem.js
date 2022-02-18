import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetinhas = planets
      .map((element) => (<PlanetCard
        key={ element.name }
        planetName={ element.name }
        planetImage={ element.image }
      />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetinhas">
          {planetinhas}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
