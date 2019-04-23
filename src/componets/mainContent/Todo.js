import React from "react";
import Label from "./Label";

const Todo = props => {
  const { title, tags, content } = props;
  return (
    <div className="Todo">
      <h3>{title}</h3>
      <div>
        {tags.map((tag, i) => (
          <Label tagName={tag} key={i} />
        ))}
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Todo;
