import AppDispatcher from "../AppDispatcher.js";
import GroceryItemConstants from "../constants/GroceryItemConstants.jsx";

var GroceryItemActions = Object.assign({},{
    add: function(item) {
        AppDispatcher.handleViewAction({
            item: item,
            actionType: GroceryItemConstants.GROCERY_ITEM_ADD
        })
    },
    buy: function(item) {
        AppDispatcher.handleViewAction({
            item: item,
            actionType: GroceryItemConstants.GROCERY_ITEM_BUY
        })
    },
    unbuy: function(item) {
        AppDispatcher.handleViewAction({
            item: item,
            actionType: GroceryItemConstants.GROCERY_ITEM_UNBUY
        })
    },
    delete: function(item) {
        AppDispatcher.handleViewAction({
            item: item,
            actionType: GroceryItemConstants.GROCERY_ITEM_DELETE
        })
    }
});

export default GroceryItemActions;

