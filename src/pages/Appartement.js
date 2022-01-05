import React from "react";
import { withRouter } from "react-router-dom";
import List from "../components/List";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Gallery from "../components/Gallery";
import NotFound from "../pages/NotFound";

class Appartement extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const customData = require("../logements").find(
      (logement) => logement.id === id
    );

    if (!customData) {
      return <NotFound />;
    } else {
      return (
        <div className="appartement">
          <Gallery data={customData.pictures} />

          <div className="header">
            <h1>{customData.title}</h1>
            <Host name={customData.host.name} img={customData.host.picture} />
          </div>
          <div className="location">{customData.location}</div>

          <div className="section">
            <Tags tags={customData.tags} />

            <Rating number={customData.rating} />
          </div>
          <div className="container-list">
            <List
              name="Description"
              data={[customData.description]}
              className="list"
            />
            <List
              name="Equipements"
              data={customData.equipments}
              className="list"
            />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Appartement);
