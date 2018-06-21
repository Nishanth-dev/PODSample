import React, { Component } from 'react';
import {  View, Text,StyleSheet, ScrollView,} from 'react-native';
import {
    COLOR_WHITE,
    COLOR_GRAY_6,
} from '../../../constants/colors';
import Map from '../map';
import { connect } from 'react-redux';
import CurrentOrderView from '../../controls/currentOrderView';
import UpcomingOrderView from '../../controls/upcomingOrderView';
import GlobalStyleSheet from '../../../constants/styles';
import {fetchOrderDetail} from '../../../redux/actions/orderDetailActions';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
    }
    static navigationOptions = { title: `Order List` }
    render() {
        return (
            <View style={styles.container}>
                <View style={GlobalStyleSheet.flex1}>
                    <View style={styles.mapContainer}>
                        {
                            this.props.orderList.length > 0 && <Map orderList={this.props.orderList} />
                        }
                    </View>
                    <View style={styles.componentTitleView}>
                        {
                            this.props.orderList.length > 0 && <Text style={GlobalStyleSheet.fontSize12}> CURRENT </Text>
                        }
                    </View>
                    {
                        this.props.orderList.length > 0 && <CurrentOrderView navProperty={this.props.navigation} data={this.props.orderList[0]} fetchDetails = {this.props.getOrderDetail} />
                    }
                </View>
                <View style={[GlobalStyleSheet.flex1, { backgroundColor: COLOR_GRAY_6 }]}>
                    <View style={styles.componentTitleView} >
                        {
                            this.props.orderList.length > 1 && <Text style={GlobalStyleSheet.fontSize12}> UPCOMING </Text>
                        }
                    </View>
                    <ScrollView>
                        {
                            this.props.orderList.map((data, key) =>
                                (key > 0 ? <UpcomingOrderView data={this.props.orderList[key]} key={key} fetchDetails = {this.props.getOrderDetail} navProperty={this.props.navigation}/> : <View key={key}></View>))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOR_GRAY_6,
    },
    componentTitleView: {
        height: '10%',
        margin: 10,
        paddingTop: 10
    },
    mapContainer: {
        height: '50%',
    },
    orderView: {
        flexDirection: 'row',
        marginLeft: 9,
        marginRight: 9,
        elevation: 2,
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        orderList: state.orderListReducer.orderList
    }
}

const mapDispatchToProps = {
    getOrderDetail: (id) => fetchOrderDetail(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);