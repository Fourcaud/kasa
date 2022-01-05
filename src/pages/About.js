import React from "react";
import List from "../components/List";

import Slider from "../components/Slider";

class About extends React.Component {
  render() {
    const customData = require("../about.json");

    return (
      <div className="about">
        <Slider img="./img/Background-about.png" />
        <div className="container-list-about">
          <List name="Fiabilité" data={[customData[0].fiabilite]} />
          <List name="Respect" data={[customData[0].respect]} />
          <List name="Service" data={[customData[0].service]} />
          <List name="Responsabilité" data={[customData[0].securite]} />
        </div>
      </div>
    );
  }
}

export default About;
