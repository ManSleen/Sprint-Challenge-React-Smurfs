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
      smurf: {
        id: Date.now(),
        name: "",
        age: "",
        height: "",
        imgUrl: ""
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);

    this.setState({
      smurf: {
        id: Date.now(),
        name: "",
        age: "",
        height: "",
        imgUrl: ""
      }
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
          <input
            onChange={this.handleInputChange}
            placeholder="image URL"
            value={this.state.imgUrl}
            name="imgUrl"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
