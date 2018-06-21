import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { COLOR_DEEP_CARROT_ORANGE, COLOR_VIOLET } from '../../../constants/colors';
import GlobalStyleSheet from '../../../constants/styles';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intialRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    componentDidMount() {
        this.setState({
            intialRegion: {
                ...this.state.intialRegion,
                latitude: Number(this.props.orderList[0].Lat),
                longitude: Number(this.props.orderList[0].Lang),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }

        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <MapView initialRegion={this.state.intialRegion} style={styles.maps}>
                    {
                        this.props.orderList.length > 1 ? this.props.orderList.map(
                            (data, key) => (<View key={key}>
                                <Marker coordinate={{ latitude: Number(data.Lat), longitude: Number(data.Lang) }} key={key}>
                                    <View style={[GlobalStyleSheet.justifyCenter, GlobalStyleSheet.alignItemsCenter]}>
                                        <View style={[styles.circle, key > 0 ? { backgroundColor: COLOR_DEEP_CARROT_ORANGE } : { backgroundColor: COLOR_VIOLET }]}>
                                            <Text style={styles.pinText}>{data.Id}</Text>
                                        </View>
                                        <View style={[styles.bottomCircle, key > 0 ? { backgroundColor: COLOR_DEEP_CARROT_ORANGE } : { backgroundColor: COLOR_VIOLET }]}></View>
                                    </View>
                                </Marker>
                            </View>
                            )) : (<View key={key}></View>)
                    }
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    maps: {
        width: null,
        height: 300,
        flex: 1
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: COLOR_DEEP_CARROT_ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3
    },
    pinText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        textAlignVertical: 'center'
    },
    bottomCircle: {
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: COLOR_DEEP_CARROT_ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
