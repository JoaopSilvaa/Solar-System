import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missoes = missions
      .map((element) => (<MissionCard
        key={ element.name }
        name={ element.name }
        year={ element.year }
        country={ element.country }
        destination={ element.destination }
      />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missoes">
          {missoes}
        </div>
      </div>
    );
  }
}

export default Missions;
