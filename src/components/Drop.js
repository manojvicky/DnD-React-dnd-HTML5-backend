import React from "react";
import "./styles.css";
import { DropTarget } from "react-dnd";
import Item from "./Item";

function collect(connect, moniter) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: moniter.isOver(),
    item: moniter.getItem()
  };
}

class Drop extends React.Component {
  render() {
    const { connectDropTarget, hovered, item, items } = this.props;
    return connectDropTarget(
      <div className="dropContainer">
        <div>
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
      </div>
    );
  }
}
export default DropTarget("item", {}, collect)(Drop);
