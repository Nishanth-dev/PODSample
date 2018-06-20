import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    COLOR_BLACK,
    COLOR_VIOLET,
    COLOR_WHITE
} from '../../../constants/colors';

export default class UpcomingOrderView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity  style={styles.orderView}onPress={() => {
                            this.props.navProperty.navigate('OrderDetail');
                        }}>
                    <Text style={styles.textID}>{this.props.data.Id}</Text>
                    <View style={styles.detailsView}>
                        <Text style={{ color: COLOR_BLACK }}>{this.props.data.DeliveryAddress1}</Text>
                        <Text style={{ color: COLOR_BLACK,fontWeight: 'bold' }}>{this.props.data.DeliveryAddress2}</Text>
                        {
                            this.props.data.distance != null && <Text>{this.props.data.distance} | {this.props.data.duration}</Text>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    orderView: {
        flexDirection: 'row',
        marginLeft: 9,
        marginRight: 9,
        elevation: 2,
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        height: 60
    },
    textID: {
        padding: 14,
        color: COLOR_VIOLET,
        fontWeight: 'bold'
    },
    detailsView: {
        width: '70%'
    }
});
