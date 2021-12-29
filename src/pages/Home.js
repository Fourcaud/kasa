import React from "react";

import Data from "../components/Data";
import Slider from "../components/Slider";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Slider
          img="./img/Background.png"
          text="Chez vous, partout et ailleurs"
        />
        <Data />
      </div>
    );
  }
}

export default Home;
