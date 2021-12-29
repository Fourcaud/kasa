import React from "react";
import List from "../components/List";

import Slider from "../components/Slider";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Slider img="./img/Background-about.png" />
        <div className="container-list">
          <List name="Fiabilité" data={[]} />
          <List name="Respect" data={[]} />
          <List name="Service" data={[]} />
          <List name="Responsabilité" data={[]} />
        </div>
      </div>
    );
  }
}

export default About;
