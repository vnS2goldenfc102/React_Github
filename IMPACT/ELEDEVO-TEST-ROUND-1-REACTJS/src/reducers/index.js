import { combineReducers } from 'redux';
import { ItemReducers } from './ItemReducers';
export default combineReducers({
    items: ItemReducers
});