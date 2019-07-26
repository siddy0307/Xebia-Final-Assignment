import React from "react";
//import FetchData from "./swapidata";

class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData:{},
      value_1: " ",
      value_2: " "
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          loginData: data.results
        })
      );
  }

  handleChangeName(event) {
    this.setState({
      value_1: event.target.value,
      authenticated: false
    });
  }

  handleChangePassword(event) {
    this.setState({
      value_2: event.target.value,
      authenticated: false
    });
  }

  handleSubmit(event) {
    if (this.state.value_1 === " " && this.state.value_2 === " ") {
      this.setState({
        authenticated: true
      });
    }
  }

  handleSubmit_1 = (event)=> {
    if (this.state.value_1 === " " && this.state.value_2 === " ") {
      this.setState({
        authenticated: true
      });
    }
  }
  render() {
    if (this.state.authenticated) {
      return <div>Invalid</div>;
    }
    return (
      <form onSubmit={this.handleSubmit_1}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value_1}
            onChange={this.handleChangeName}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="text"
            value={this.state.value_2}
            onChange={this.handleChangePassword}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Screen1;
