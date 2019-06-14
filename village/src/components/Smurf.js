import React from "react";
import "../App.css";

const Smurf = props => {
  console.log(props);
  return (
    <div className="Smurf">
      <div className="smurf-card-top">
        <div className="smurf-image">
          <img src={props.imgUrl} />
        </div>
        <div className="smurf-info">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
      </div>
      <div className="smurf-card-bottom">
        <div className="edit-delete-container">
          <div className="edit-button">Edit</div>
          <div className="delete-button">Delete</div>
        </div>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
