import actionTypes from '../actions/action-types';

const initialState = {
    orderList: []
}

export default orderListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDER_LIST:
            return {
                orderList : [...action.payload]
            }
        default: return state
    }
}