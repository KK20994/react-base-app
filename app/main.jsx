import ReactDOM from "react-dom";
import React from "react";
import GroceryItemList from "./components/GroceryItemList.jsx";
import GroceryItemStore from "./stores/GroceryItemStore.jsx";
var initials = GroceryItemStore.getList().items;
function render () {
    ReactDOM.render(<GroceryItemList items={initials}/>, document.getElementById("app"));
}
GroceryItemStore.addChangeListener(function(){
    initials = GroceryItemStore.getList().items;
    render();
});
render();

