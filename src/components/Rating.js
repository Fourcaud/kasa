import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Rating extends React.Component {
  render() {
    const number = [];

    for (let index = 0; index < this.props.number; index++) {
      number.push(
        <FontAwesomeIcon key={index} icon={faStar} className="star" />
      );
    }

    return <div className="rating">{number}</div>;
  }
}

export default Rating;
