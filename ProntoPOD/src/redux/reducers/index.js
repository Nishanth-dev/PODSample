import { combineReducers } from 'redux';
import orderListReducer from './orderListReducer';
import orderDetailReducer from './orderDetailReducer';

const rootReducer = combineReducers({
    orderDetailReducer,
    orderListReducer,
});

export default rootReducer;