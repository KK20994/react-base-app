import React from "react";
import GroceryItem from './GroceryItem.jsx';

class GroceryItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""};
    this.handleInputName = this.handleInputName.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem (e) {
    e.preventDefault();
    this.props.items.push({name: this.state.input})
    this.setState({
            input:''
        })
  }
  handleInputName (e){
    this.setState({input : e.target.value});
  }
  render() {
    return  <div className={'text-center row'}>
              <h1>Grocery Listify</h1>
                <ul className={"list-group text-left col-md-offset-3 col-md-6"}>
                  {this.props.items.map((item,index)=> <GroceryItem item={item} key={"item"+ index}/>)}
                </ul>
                <form onSubmit={this.addItem} className="form-inline">
                    <input value={this.state.input} className="form-control"  onChange={this.handleInputName}/>&nbsp;&nbsp;
                    <button className="btn btn-primary"> Add Item </button>
                </form>
            </div>;
  }
}
export default GroceryItemList;
