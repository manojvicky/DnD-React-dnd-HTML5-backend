import React from "react";
import DragNDrop from "./components/DragNDrop";

export default class extends React.Component {
  render() {
    console.log("==>DnD from app", <DragNDrop />);
    return (
      <div className="main">
        <DragNDrop />
      </div>
    );
  }
}
