import actionTypes from './action-types';
import { DISTANCE_BASE_URL, DISTANCE_API_KEY } from '../../constants/strings';
import { prontoGet, get } from '../../services/APIService';

const mockOrders = [
    {
        "Id": 1,
        "InvoiceId": 1,
        "ManifestId": 1,
        "Status": "In Transit",
        "DeliveryInstructions": "Order 1.No more instructions as of now.",
        "PackagesCount": 1,
        "Weight": 1,
        "Volume": 1,
        "CustomerId": 1,
        "DeliveryAddress1": "125,Beacon Lane",
        "DeliveryAddress2": "Glen Waverly, VIC 3150",
        "Lat": "-37.885619",
        "Lang": "145.163548",
        "Customer": {
            "Id": null,
            "Name": null,
            "Mobile": null,
            "Reference": null,
            "Address": null,
        }
    },
    {
        "Id": 2,
        "InvoiceId": 2,
        "ManifestId": 2,
        "Status": "In Transit",
        "DeliveryInstructions": "Order 2.No more instructions as of now.",
        "PackagesCount": 2,
        "Weight": 2,
        "Volume": 2,
        "CustomerId": 1,
        "DeliveryAddress1": "Unit 1/6 Skipton Rd",
        "DeliveryAddress2": "Hughesdale VIC 3166",
        "Lat": "-37.898064",
        "Lang": "145.080865",
        "Customer": {
            "Id": null,
            "Name": null,
            "Mobile": null,
            "Reference": null,
            "Address": null,
        }
    },
      {
        "Id": 3,
        "InvoiceId": 2,
        "ManifestId": 2,
        "Status": "In Transit",
        "DeliveryInstructions": "Order 2.No more instructions as of now.",
        "PackagesCount": 2,
        "Weight": 2,
        "Volume": 2,
        "CustomerId": 1,
        "DeliveryAddress1": "GGK, Uppal",
        "DeliveryAddress2": "Hyderabad, India",
        "Lat": "17.409627",
        "Lang": "78.544114",
        "Customer": {
          "Id": null,
          "Name": null,
          "Mobile": null,
          "Reference": null,
          "Address": null,
        }
      },
    //   {
    //     "Id": 4,
    //     "InvoiceId": 2,
    //     "ManifestId": 2,
    //     "Status": "In Transit",
    //     "DeliveryInstructions": "Order 2.No more instructions as of now.",
    //     "PackagesCount": 2,
    //     "Weight": 2,
    //     "Volume": 2,
    //     "CustomerId": 1,
    //     "DeliveryAddress1": "Unit 1/6 Skipton Rd",
    //     "DeliveryAddress2": "Hughesdale VIC 3166",
    //     "Lat": "-37.898064",
    //     "Lang": "145.080865",
    //     "Customer": {
    //       "Id": null,
    //       "Name": null,
    //       "Mobile": null,
    //       "Reference": null,
    //       "Address": null,
    //     }
    //   },
    //   {
    //     "Id": 5,
    //     "InvoiceId": 2,
    //     "ManifestId": 2,
    //     "Status": "In Transit",
    //     "DeliveryInstructions": "Order 2.No more instructions as of now.",
    //     "PackagesCount": 2,
    //     "Weight": 2,
    //     "Volume": 2,
    //     "CustomerId": 1,
    //     "DeliveryAddress1": "Unit 1/6 Skipton Rd",
    //     "DeliveryAddress2": "Hughesdale VIC 3166",
    //     "Lat": "-37.898064",
    //     "Lang": "145.080865",
    //     "Customer": {
    //       "Id": null,
    //       "Name": null,
    //       "Mobile": null,
    //       "Reference": null,
    //       "Address": null,
    //     }
    //   },
    //   {
    //     "Id": 6,
    //     "InvoiceId": 2,
    //     "ManifestId": 2,
    //     "Status": "In Transit",
    //     "DeliveryInstructions": "Order 2.No more instructions as of now.",
    //     "PackagesCount": 2,
    //     "Weight": 2,
    //     "Volume": 2,
    //     "CustomerId": 1,
    //     "DeliveryAddress1": "Unit 1/6 Skipton Rd",
    //     "DeliveryAddress2": "Hughesdale VIC 3166",
    //     "Lat": "-37.898064",
    //     "Lang": "145.080865",
    //     "Customer": {
    //       "Id": null,
    //       "Name": null,
    //       "Mobile": null,
    //       "Reference": null,
    //       "Address": null,
    //     }
    //   },
    //   {
    //     "Id": 7,
    //     "InvoiceId": 2,
    //     "ManifestId": 2,
    //     "Status": "In Transit",
    //     "DeliveryInstructions": "Order 2.No more instructions as of now.",
    //     "PackagesCount": 2,
    //     "Weight": 2,
    //     "Volume": 2,
    //     "CustomerId": 1,
    //     "DeliveryAddress1": "Unit 1/6 Skipton Rd",
    //     "DeliveryAddress2": "Hughesdale VIC 3166",
    //     "Lat": "-37.898064",
    //     "Lang": "145.080865",
    //     "Customer": {
    //       "Id": null,
    //       "Name": null,
    //       "Mobile": null,
    //       "Reference": null,
    //       "Address": null,
    //     }
    //   },
    //   {
    //     "Id": 8,
    //     "InvoiceId": 2,
    //     "ManifestId": 2,
    //     "Status": "In Transit",
    //     "DeliveryInstructions": "Order 2.No more instructions as of now.",
    //     "PackagesCount": 2,
    //     "Weight": 2,
    //     "Volume": 2,
    //     "CustomerId": 1,
    //     "DeliveryAddress1": "Unit 1/6 Skipton Rd",
    //     "DeliveryAddress2": "Hughesdale VIC 3166",
    //     "Lat": "-37.898064",
    //     "Lang": "145.080865",
    //     "Customer": {
    //       "Id": null,
    //       "Name": null,
    //       "Mobile": null,
    //       "Reference": null,
    //       "Address": null,
    //     }
    //}
];

//Used to get list of orders from API
export const fetchOrderList = () => async (dispatch) => {
    //let result = await prontoGet('order/GetAllOrders', null);
    let result = mockOrders;
    dispatch(getOrderList(result));
    orderListWithETA(result, dispatch);
}

//Will get the current location
//Parameters : 
//orders - list of orders containing Lat and long
const orderListWithETA = (orders, dispatch) => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                result = await calculateETA(position, orders);
                dispatch(getOrderList(result));
            }
            catch (error) {
                dispatch(errorCaught(error));
            }
        },
        (error) => { throw (error) },
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    )
}

//Will calculate the estimated time and distance
//Parameters:
//position - Current location
//orders- list of orders
//returns orders with distance and duration from the device's current location
calculateETA = async (position, orders) => {
    let initialLat = position.coords.latitude;
    let initialLong = position.coords.longitude;
    for (let i = 0; i < orders.length; i++) {
        const url = DISTANCE_BASE_URL + initialLat + ',' + initialLong +
            '&destination=' + orders[i].Lat + ',' + orders[i].Lang +
            '&key=' + DISTANCE_API_KEY;// + '&mode=driving';
        let responseJSON = await get(url);
        console.log(responseJSON);
        try {
            if (responseJSON.status === 'OK') {
                orders[i].distance = responseJSON.routes[0].legs[0].distance.text;
                orders[i].duration = responseJSON.routes[0].legs[0].duration.text;
            }
            else{
                //TODO: Need to handel error
                console.log("Error");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return orders;
}

//Action for Order list
//Dispatched to order list reducer
const getOrderList = (orders) => {
    return {
        type: actionTypes.GET_ORDER_LIST,
        payload: orders
    }
}
