import React from "react";
import Card from "./Card";

class Data extends React.Component {
  render() {
    const customData = require("../logements");

    return (
      <div className="data">
        <ul className="data-list">
          {customData.map((appartement) => (
            <Card appartement={appartement} key={appartement.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Data;
