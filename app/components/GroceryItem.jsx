import React from "react";

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.item;
    this.checkItem = this.checkItem.bind(this);
    this.unCheckItem = this.unCheckItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  checkItem() {
    this.setState( {purchased: true})
  }
  unCheckItem() {
    this.setState({purchased: false})
  }
  deleteItem() {
     this.setState({removed: true})
  }
  render() {
    return <li className={this.state.removed? "hidden": "list-group-item list-group-item-info"}>
      <span className={this.state.purchased? 'done col-sm-10': 'col-sm-10'}>{this.props.item.name}</span>
      <div className="btn-group" role="group" >
          <button onClick={this.checkItem} type="button" className={this.state.purchased? "hidden" : "btn btn-link"}><span className="glyphicon glyphicon-unchecked"></span></button>
          <button onClick={this.unCheckItem} type="button" className={this.state.purchased? "btn btn-link" : "hidden"}><span className="glyphicon glyphicon-check"></span></button>
          <button onClick={this.deleteItem} type="button" className="btn btn-link"><span className="glyphicon glyphicon-remove-circle"></span></button>
      </div>
    </li>;
  }
}


export default GroceryItem;
