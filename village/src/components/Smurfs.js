import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Welcome to Smurf Village</h1>
        <div className="smurfs-container">
          {this.props.smurfs.map(smurf => {
            console.log(smurf);
            return (
              <Smurf
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                imgUrl={smurf.imgUrl}
                key={smurf.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
