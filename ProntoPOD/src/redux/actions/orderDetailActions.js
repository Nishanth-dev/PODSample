import {prontoGet} from '../../services/APIService'
import actionTypes from './action-types';

const mockOrder = {
    "Id": 1,
    "InvoiceId": 1,
    "ManifestId": 1,
    "Status": "In Transit",
    "DeliveryInstructions": "Order 1.No more instructions as of now.",
    "PackagesCount": 1,
    "Weight": 1,
    "Volume": 1,
    "CustomerId": 1,
    "DeliveryAddress": "125,Beacon Lane,Glen Waverly, VIC 3150",
    "distance" : "23 mil",
    "duration":"43 mins away",
    "Lat": "-37.885619",
    "Lang": "145.163548",
    "Customer": {
      "Name": "Uppal,Hyderabad",
      "Mobile": "9998887776",
      "Reference": "GGK Tech",
      "Address": "ggkref1234",
    }
  };
//Will fetch complete details of a particular order
//Parameters :
//id - It is the order id
export const fetchOrderDetail = (id) => async (dispatch) => {
    //const url = 'order/GetOrderById/2';
    //let result = await prontoGet(url, null);
    let result = mockOrder;
    dispatch(getOrderDetail(result));
}

//Action which dispatches to the Order detail reducer
//Parameters:
//orderDetail - complete detail of the order
const getOrderDetail = (orderDetail) => {
    return {
        type: actionTypes.GET_ORDER_DETAIL,
        payload: orderDetail,
    }
}