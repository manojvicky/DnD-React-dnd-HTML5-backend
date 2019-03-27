import React from "react";
import "./styles.css";
import { DragSource } from "react-dnd";
const itemSource = {
  beginDrag(props) {
    console.log("==>beginDrag", props);
    return props.item;
  },
  endDrag(props, moniter, component) {
    console.log("==>endDrag", props, moniter.getItem(), component);
    // if (moniter.getItem() === props.item) {
    //   return;
    // }
    if (!moniter.didDrop()) {
      return;
    }
    return props.handleDrop(props.item);
  }
};

function collect(connect, moniter) {
  console.log("==>collect", moniter, connect);

  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: moniter.isDragging()
  };
}
class Item extends React.Component {
  render() {
    const { connectDragSource, item, isDragging } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div style={{ opacity }} className="item">
        {item.name}
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);
