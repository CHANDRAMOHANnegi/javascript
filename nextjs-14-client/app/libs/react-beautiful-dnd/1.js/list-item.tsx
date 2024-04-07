import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ListItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="drag-item"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span>Content</span>
            <h4>{item.id}</h4>
          </div>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
