import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavBar from "./components/NavBar";
import UpdateSmurfForm from "./components/UpdateSmurfForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateSmurf = updatedSmurf => {
    console.log(updatedSmurf);
    axios
      .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, smurf) => {
    e.preventDefault();

    this.setState({
      activeSmurf: smurf
    });
    this.props.history.push("/edit-smurf-form");
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              setUpdateForm={this.setUpdateForm}
              updateSmurf={this.updateSmurf}
              deleteSmurf={this.deleteSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          exact
          path="/edit-smurf-form"
          render={props => (
            <UpdateSmurfForm
              {...props}
              activeSmurf={this.state.activeSmurf}
              setUpdateForm={this.setUpdateForm}
              updateSmurf={this.updateSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
