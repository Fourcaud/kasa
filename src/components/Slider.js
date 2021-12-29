import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <img src={this.props.img} alt="background" />
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Slider;
