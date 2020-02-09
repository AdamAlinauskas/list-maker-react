import React from "react";

const Description = ({ description, onDescriptionChange }) => {
  return (
    <div className="row mb-3">
      <div className="col" style={{ textAlign: "center" }}>
        <input
          style={{ textAlign: "center" }}
          placeholder="Title"
          type="text"
          className="input-field input-title input-description"
          onChange={e => onDescriptionChange(e.target.value)}
          value={description}
          placeholder="description"
          maxLength="50"
        />
      </div>
    </div>
  );
};

export default Description;
