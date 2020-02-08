import React, { useState } from "react";
import ListItemComponent from "../listItemComponent";

const ListItems = ({ items, onToggleItemIsComplete }) => {
  console.log(items);
  return (
    <div className="row">
      <div className="col-md-12 col-md-6">
        <ul className="list-group">
          {items.map((item, pos) => {
            return (
              <ListItemComponent
                key={item.text}
                item={item}
                onClick={onToggleItemIsComplete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListItems;
