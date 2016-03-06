import React from "react";
import  GroceryItemActions from "./../actions/GroceryItemActions.jsx";
class GroceryItemButtons extends React.Component {
    constructor(props) {
        super(props);
        this.checkItem = this.checkItem.bind(this);
        this.unCheckItem = this.unCheckItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    checkItem() {
        GroceryItemActions.buy(this.props.item)
    }
    unCheckItem() {
        GroceryItemActions.unbuy(this.props.item)
    }
    deleteItem() {
        GroceryItemActions.delete(this.props.item)
    }
    render() {
        return <div className="btn-group" role="group" >
            <button onClick={this.checkItem} type="button" className={this.props.item.purchased? "hidden" : "btn btn-link"}><span className="glyphicon glyphicon-unchecked"> </span></button>
            <button onClick={this.unCheckItem} type="button" className={this.props.item.purchased? "btn btn-link" : "hidden"}><span className="glyphicon glyphicon-check"> </span></button>
            <button onClick={this.deleteItem} type="button" className="btn btn-link"><span className="glyphicon glyphicon-remove-circle"> </span></button>
        </div>;
    }
}
export default GroceryItemButtons;