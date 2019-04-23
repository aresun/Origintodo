import React from "react";

const Checkbox = props => {
  return (
    <div className="Checkbox">
      <div
        dangerouslySetInnerHTML={{
          __html: "<span style='color:red'>&#10003</span>"
        }}
      />
    </div>
  );
};

export default Checkbox;
