import React, { Component } from "react";

const Save = ({ onSave }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <button onClick={onSave} className="btn btn-dark mt-3 col-md-12">
          Save
        </button>
      </div>
    </div>
  );
};

export default Save;
