import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src={this.props.img} alt="logo" />
      </div>
    );
  }
}

export default Logo;
