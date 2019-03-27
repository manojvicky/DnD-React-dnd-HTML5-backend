import React from "react";
import "./styles.css";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import Drag from "./Drag";
import Drop from "./Drop";
class DragNDrop extends React.Component {
  constructor() {
    super();
    this.state = {
      items1: [
        { id: "item1", name: "item1" },
        { id: "item2", name: "item2" },
        { id: "item3", name: "item3" }
      ],
      items2: [
        { id: "item4", name: "item4" },
        { id: "item5", name: "item5" },
        { id: "item6", name: "item6" },
        { id: "item7", name: "item7" }
      ]
    };
  }
  handleDrop1 = draggedItem => {
    console.log("==> handleDrop1", draggedItem);
    // if (this.state.items1.some(item => item === draggedItem)) {
    //   return;
    // }
    this.setState({
      items1: this.state.items1.filter(item => item !== draggedItem),
      items2: [draggedItem, ...this.state.items2]
    });
  };
  handleDrop2 = draggedItem => {
    console.log("==> handleDrop2", draggedItem);
    // if (this.state.items2.some(item => item === draggedItem)) {
    //   return;
    // }
    this.setState({
      items1: [draggedItem, ...this.state.items1],
      items2: this.state.items2.filter(item => item !== draggedItem)
    });
  };
  render() {
    console.log("==> this.props of DnD", this.props);
    return (
      <div className="outerDiv">
        <Drag items={this.state.items1} handleDrop={this.handleDrop1} />
        <Drop items={this.state.items2} handleDrop={this.handleDrop2} />
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(DragNDrop);
