import AppDispatcher from './../AppDispatcher.js';
import { EventEmitter } from 'events';
import GroceryItemConstants from "../constants/GroceryItemConstants.jsx";

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
    items:  [
        {
            name: "Candy"
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
};


class GroceryItemStoreClass extends EventEmitter {
    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

    getList() {
        return _store;
    }
}
const GroceryItemStore = new GroceryItemStoreClass();

AppDispatcher.register((payload) => {
    var index;
    switch (payload.action.actionType) {
        case GroceryItemConstants.GROCERY_ITEM_ADD:
            _store.items.push(payload.action.item);
            GroceryItemStore.emit(CHANGE_EVENT);
            break;
        case GroceryItemConstants.GROCERY_ITEM_BUY:
        case GroceryItemConstants.GROCERY_ITEM_UNBUY:
            payload.action.item.purchased =  payload.action.item.purchased? false: true;
            index = _store.items.findIndex(_item => _item.name === payload.action.item.name);
            _store.items[index] = payload.action.item;
            GroceryItemStore.emit(CHANGE_EVENT);
            break;
        case GroceryItemConstants.GROCERY_ITEM_DELETE:
            index = _store.items.findIndex(_item => _item.name === payload.action.item.name);
            _store.items.splice(index, 1);
            GroceryItemStore.emit(CHANGE_EVENT);
    }
});

export default GroceryItemStore;
