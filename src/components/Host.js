import React from "react";

class Host extends React.Component {
  render() {
    return (
      <div className="host">
        <p>{this.props.name}</p>
        <img src={this.props.img} alt="profil" />
      </div>
    );
  }
}

export default Host;
