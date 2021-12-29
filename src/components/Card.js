import React from "react";

import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { appartement } = this.props;

    return (
      <Link
        className="card"
        to={{
          pathname: `/appartement/${appartement.id}`,
        }}
      >
        <img src={appartement.cover} alt={appartement.title} />
        <p>{appartement.title}</p>
      </Link>
    );
  }
}

export default Card;

//to={{ pathname: `appartement/${appartement.link}`, state: { appartement}}to={`/appartement/${appartement.id}`}
