import React, { useState } from "react";

const AddListItem = ({ onAddItem }) => {
  const [text, setText] = useState("");

  return (
    <div className="row">
      <div className="col">
        <form
          onSubmit={e => {
            e.preventDefault();
            setText("");
            onAddItem(text);
          }}
        >
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Item"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              autoFocus
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListItem;
