import React from "react";

const Description = ({ description, onDescriptionChange }) => {
  return (
    <div className="row">
      <input
        onChange={e => onDescriptionChange(e.target.value)}
        value={description}
        placeholder="description"
      />
    </div>
  );
};

export default Description;
