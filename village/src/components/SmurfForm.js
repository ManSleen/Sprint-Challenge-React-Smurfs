import React, { Component } from "react";
import "../App.css";

class SmurfForm extends Component {
  constructor(props) {
    if (props) {
      console.log(props);
    } else {
      console.log("Not loaded yet!");
    }

    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>Add a New Smurf</h2>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
