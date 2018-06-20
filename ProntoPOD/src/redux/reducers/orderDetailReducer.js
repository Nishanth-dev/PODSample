import actionTypes from '../actions/action-types';

const initialState = {
  orderDetail: {
    "Id": null,
    "InvoiceId": null,
    "ManifestId": null,
    "Status": null,
    "DeliveryInstructions": null,
    "PackagesCount": null,
    "Weight": null,
    "Volume": null,
    "CustomerId": null,
    "DeliveryAddress": null,
    "Lat": null,
    "Lang": null,
    "Customer": {
      "Id": null,
      "Name": null,
      "Mobile": null,
      "Reference": null,
      "Address": null,
    }
  }
}


export default orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.payload
      }
    default: return state;
  }
}