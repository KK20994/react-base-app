import ReactDOM from "react-dom";
import React from "react";
import GroceryItemList from "./components/GroceryItemList.jsx";
var items = [
  {
    name: "Candy",
  },
  {
    name: "Grapes"
  },
  {
    name: "Oranges",
    purchased: true
  },
  {
    name: "Pens"
  }
]

ReactDOM.render(<GroceryItemList items={items} />, document.getElementById("app"));
