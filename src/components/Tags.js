import React from "react";

class Tags extends React.Component {
  render() {
    return (
      <div className="tags">
        {this.props.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    );
  }
}

export default Tags;
