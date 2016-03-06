import React from "react";
import GroceryItemButtons from "./GroceryItemButtons.jsx";

class GroceryItem extends React.Component {
  render() {
    return <li className={this.props.item.removed? "hidden": "list-group-item list-group-item-info"}>
      <span className={this.props.item.purchased? 'done col-sm-10': 'col-sm-10'}>{this.props.item.name}</span>
      <GroceryItemButtons item={this.props.item}/>
    </li>;
  }
}


export default GroceryItem;
