import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button onClick={() => this.handleClick()}>
          {this.props.name}
          {isOpen && <FontAwesomeIcon icon={faChevronUp} className="chevron" />}
          {!isOpen && (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          )}
        </button>
        {isOpen &&
          this.props.data.map((element) => <p key={element}>{element}</p>)}
      </div>
    );
  }
}

export default List;
