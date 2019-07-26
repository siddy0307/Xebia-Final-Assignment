import React from "react";

class FetchData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchVal: this.props.searchCriteria || null
    };
    this.filterPlanet = this.filterPlanet.bind(this);
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results
        })
      );
  }
  filterPlanet=()=>{
    console.log(this.state.searchVal)
    if(this.state.searchVal != null){
      var commentNodes = this.state.data.filter((item)=> {
        return item.name.toLowerCase().search(
          this.props.searchCriteria.toLowerCase()) !== -1;
      });
      console.log(commentNodes)
    }
    // this.setState({ 
    //   todos: updatedList,
    //   });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.data.map((planet, index) => (
            <p key={index}>
              {planet.name} - {planet.population}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default FetchData;
