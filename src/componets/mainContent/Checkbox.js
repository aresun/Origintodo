import React from "react";

const Checkbox = props => {
  return (
    <div className="Checkbox" onClick={props.handler}>
      <div
        dangerouslySetInnerHTML={{
          __html: "<span style='color:red'>&radic;</span>"
        }}
      />
    </div>
  );
};

export default Checkbox;
