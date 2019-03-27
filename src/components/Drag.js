import React from "react";
import Item from "./Item";
import "./styles.css";
import { DropTarget } from "react-dnd";

function collect(connect, moniter) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: moniter.isOver(),
    item: moniter.getItem()
  };
}

class Drag extends React.Component {
  render() {
    const { connectDropTarget, hovered, item, items } = this.props;
    return connectDropTarget(
      <div className="dragConatainer">
        {items.map((item, index) => {
          return (
            <Item
              item={item}
              name={item.name}
              key={item.id}
              handleDrop={draggedItem => this.props.handleDrop(draggedItem)}
            />
          );
        })}
      </div>
    );
  }
}
export default DropTarget("item", {}, collect)(Drag);
