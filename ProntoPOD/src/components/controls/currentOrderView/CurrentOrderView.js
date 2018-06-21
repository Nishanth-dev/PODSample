import React, { Component } from 'react';
import { Platform, FlatList, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import {
    COLOR_BLACK,
    COLOR_WHITE,
    COLOR_DARKBLUE,
    COLOR_DEEP_CARROT_ORANGE
} from '../../../constants/colors';
import ImgNavigateIcon from '../../../assets/images/navigate.png';
import ImgInTransitIndicator from '../../../assets/images/inTransitIndicator.png';
import GlobalStyleSheet from '../../../constants/styles';
import { MAPS_BASE_URL } from '../../../constants/strings';

export default class CurrentOrderView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View>
                <View style={styles.orderView}>
                    <TouchableOpacity style={styles.detailsTouchableView}
                        onPress={() => {
                            this.props.fetchDetails && this.props.data && this.props.fetchDetails(this.props.data.Id);
                            this.props.navProperty.navigate('OrderDetail');
                        }}>
                        <Text
                            style={styles.textId}>
                            {this.props.data.Id}</Text>
                        <View style={styles.detailsView}>
                            <Text style={{ color: COLOR_BLACK }}>{this.props.data.DeliveryAddress1}</Text>
                            <Text style={{ color: COLOR_BLACK, fontWeight:'bold' }}>{this.props.data.DeliveryAddress2}</Text>
                            {
                                this.props.data.duration && <Text>{this.props.data.duration}  |  {this.props.data.duration}</Text>
                            }
                            
                            <View style={[GlobalStyleSheet.flexRow, GlobalStyleSheet.marginTop2,GlobalStyleSheet.alignItemsCenter]}>
                                <Image source={ImgInTransitIndicator} style={styles.InTransitIndicatorIcon} />
                                <Text style={[GlobalStyleSheet.fontSize12, { color: COLOR_DARKBLUE }]}>IN TRANSIT</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.navigationIconView}>
                        <TouchableOpacity onPress={() => { this.navigate(this.props.data.Lat, this.props.data.Lang) }} >
                            <Image source={ImgNavigateIcon}
                                style={styles.navigationIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    navigate(lat, long) {
        let url = MAPS_BASE_URL + lat + '+' + long;
        Linking.openURL(url);
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
        alignItems: 'center'
    },
    detailsTouchableView: {
        flexDirection: 'row',
        height: 80
    },
    textId: {
        padding: 14,
        color: COLOR_DEEP_CARROT_ORANGE,
        fontWeight: 'bold',
        // textAlignVertical: 'center'
    },
    InTransitIndicatorIcon: {
        height: 10,
        width: 10,
        marginRight: 10,
        marginTop: 1
    },
    detailsView: {
        width: '70%',
        height: '100%',
        justifyContent: 'center'
    },
    navigationIcon: {
        resizeMode: "contain",
        height: 50,
        width: 50
    },
    navigationIconView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
