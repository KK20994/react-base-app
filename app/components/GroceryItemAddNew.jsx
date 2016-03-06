import React from "react";
import GroceryItemActions from "../actions/GroceryItemActions.jsx"

class GroceryItemAddNew extends React.Component {
    constructor (props) {
        super(props);
        this.state = {input: ""};
        this.handleInputName = this.handleInputName.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    addItem (e) {
        e.preventDefault();
        GroceryItemActions.add({name: this.state.input});
        this.setState({
            input:''
        })
    }
    handleInputName (e){
        this.setState({input : e.target.value});
    }
    render () {
        return <form onSubmit={this.addItem} className="form-inline">
                <input value={this.state.input} className="form-control"  onChange={this.handleInputName}/>&nbsp;&nbsp;
                <button className="btn btn-primary"> Add Item </button>
               </form>;
    }
}

export default GroceryItemAddNew;