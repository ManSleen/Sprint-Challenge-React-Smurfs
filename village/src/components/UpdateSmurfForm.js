import React, { Component } from "react";
import "../App.css";

class UpdateSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf
    };
  }

  updateSmurf = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: "",
        imgUrl: ""
      }
    });
  };

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    console.log(this.state.smurf);
    return (
      <div className="SmurfForm">
        <h2>Edit a Smurf</h2>
        <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="image URL"
            value={this.state.smurf.imgUrl}
            name="imgUrl"
          />
          <button type="submit">Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateSmurfForm;
