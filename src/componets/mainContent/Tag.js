import React from "react";

const Tag = props => {
  return (
    <div className="Tag">
      {props.name}
      {/* delete this tag */}
      <span>+</span>
    </div>
  );
};

export default Tag;
