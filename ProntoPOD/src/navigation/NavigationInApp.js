import { createStackNavigator } from 'react-navigation';
import Map from '../components/pages/map';
import OrderList from '../components/pages/orderList';
import OrderDetail from '../components/pages/orderDetail';
import Configuration from '../components/pages/configuration';
import Login from '../components/pages/login';

export const NavigationInApp = createStackNavigator({
    Configuration: { screen: Configuration },
    Login: { screen: Login },
    OrderList: { screen: OrderList },
    OrderDetail: { screen: OrderDetail },
    Map: { screen: Map },
});
