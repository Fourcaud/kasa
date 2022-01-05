import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  isSingleImg() {
    return this.props.data.length === 1;
  }
  getImgLength() {
    return this.props.data.length;
  }
  handleClickRight() {
    if (this.state.count > this.getImgLength() - 2) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }
  handleClickLeft() {
    if (this.state.count <= 0) {
      this.setState({
        count: this.getImgLength() - 2,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  splitElement(element) {
    const splits = element.split("/");
    const altData = splits.pop();
    return altData;
  }

  render() {
    if (this.isSingleImg()) {
      return (
        <div className="gallery">
          {
            <div
              key={this.splitElement(this.props.data[this.state.count])}
              className="container-img"
            >
              <img
                src={this.props.data[this.state.count]}
                alt={this.splitElement(this.props.data[this.state.count])}
              />
            </div>
          }
        </div>
      );
    }
    return (
      <div className="gallery">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="gallery__btn-next btn"
          onClick={() => this.handleClickRight()}
        />

        {
          <div
            key={this.splitElement(this.props.data[this.state.count])}
            className="container-img"
          >
            <img
              src={this.props.data[this.state.count]}
              alt={this.splitElement(this.props.data[this.state.count])}
            />
          </div>
        }
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="gallery__btn-prev btn"
          onClick={() => this.handleClickRight()}
        />
      </div>
    );
  }
}

export default Gallery;
