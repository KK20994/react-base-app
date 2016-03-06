import React from "react";
import GroceryItem from './GroceryItem.jsx';
import GroceryItemAddNew from "./GroceryItemAddNew.jsx";

class GroceryItemList extends React.Component {
  render() {
    return  <div className={'text-center row'}>
              <h1>Grocery Listify</h1>
                <ul className={"list-group text-left col-md-offset-3 col-md-6"}>
                  {this.props.items.map((item,index)=> <GroceryItem item={item} key={"item"+ index}/>)}
                </ul>
                <GroceryItemAddNew />
            </div>;
  }
}
export default GroceryItemList;
