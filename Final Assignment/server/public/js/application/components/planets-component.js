import React from 'react';
// import { PieTooltip } from 'react-d3-tooltip';
import PropTypes from 'prop-types';
import SearchBox from './search-box-component';
//import PlanetTable from './table-component';
import {
  randomColor,
  populationFormatConverter,
} from '../utilities/planet-utilities.js';

class Planets extends React.Component {
    constructor() {
      super();
      this.state = {
        planets: [],
        maxPopulation: 0,
        searchKeyword: '',
      }
    }

    componentDidMount() {
      this.fetchPlanetDetails();
    }

    search = (searchTerm) => {
      this.setState({ searchKeyword: searchTerm });
    }

    fetchPlanetDetails = () => {
      let max = 0
      fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
        .then(data =>
          this.setState({ planets: data.results })
          );
      this.state.planets.forEach(function (planet) {
        if (planet.population != "unknown") {
          if (parseInt(planet.population, 10) > max) {
            max = parseInt(planet.population, 10);
          }
        }
      });
      this.setState({ maxPopulation: max });    
    }

    render() {
      let state = this.state;
      let { store } = this.context;
      let storeData = store.getState();

      return (
        <div className="col-md-12 col-sm-12 no-padding planets-component">
          <SearchBox search={this.search} />

          <div className="loggedin-user">
            Logged In User - { storeData.loginReducer.userDetails.name }
          </div>

          <div className="col-md-12 col-sm-12 planets-container">
            {
              this.state.planets.map(function (planet, index) {
                if (planet.name.toLowerCase().indexOf(state.searchKeyword.toLowerCase()) != -1) {
                  return (
                    <div
                      style={{
                        width: planet.population === 'unknown' ? 100 : 100 + ( 350 * ( parseInt(planet.population, 10)  / state.maxPopulation ) ) + 'px',
                        background: randomColor(),
                      }}
                      className="planets"
                      title={ 'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population }
                      key={index}
                    >
                      <span className="planet-name">
                        { planet.name }
                      </span>
                      <span className="planet-population">
                        { populationFormatConverter(planet.population) }
                      </span>
                    </div>
                  );
                } else {
                  return null;
                }
              }).filter(function (updatedPlanet) {
                if (updatedPlanet !== null) {
                  return true;
                }
                return false;
              })
            }
          </div>
          <div className="col-md-12 col-sm-12 planets-container">
            {
              this.state.planets.map(function (planet, index) {
                if (planet.name.toLowerCase().indexOf(state.searchKeyword.toLowerCase()) != -1) {
                  return (
                    <div
                      style={{
                        width: planet.population === 'unknown' ? 100 : 100 + ( 350 * ( parseInt(planet.population, 10)  / state.maxPopulation ) ) + 'px',
                        background: randomColor(),
                      }}
                      className="planets"
                      title={ 'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population }
                      key={index}
                    >
                      <span className="planet-name">
                        { planet.name }
                      </span>
                      <span className="planet-population">
                        { populationFormatConverter(planet.population) }
                      </span>
                    </div>
                  );
                } else {
                  return null;
                }
              }).filter(function (updatedPlanet) {
                if (updatedPlanet !== null) {
                  return true;
                }
                return false;
              })
            }
          </div>
          {/* <PlanetTable/> */}
        </div>
      )
    }
};

Planets.contextTypes = {
  store: PropTypes.object
};

export default Planets;
