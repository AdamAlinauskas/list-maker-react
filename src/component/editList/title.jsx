import React, { Component } from "react";

const Title = ({ title, onChange }) => {
  return (
    <div className="row mb-3">
      <div className="col" style={{ textAlign: "center" }}>
        <input
          style={{ textAlign: "center" }}
          placeholder="Title"
          type="text"
          className="input-field input-title"
          value={title}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Title;
