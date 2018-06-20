import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import ImgProntoLogo from '../../../assets/images/prontoLogo.png';
import { COLOR_WHITE, COLOR_ISABELLINE, COLOR_GRAY_3, COLOR_VIOLET, COLOR_DEEP_CARROT_ORANGE } 
from '../../../constants/colors';

export default class Home extends Component {
    static navigationOptions = { header: null }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Image source={ImgProntoLogo} style={styles.logo} />
                </View>
                <Text style={styles.welcomeNote}>Hi, John</Text>
                <View style={styles.optionsView}>
                    <TouchableOpacity style={[styles.touchableView, { backgroundColor: COLOR_DEEP_CARROT_ORANGE }]} >
                        <Text style={styles.touchableText}>LOAD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableView, { backgroundColor: COLOR_VIOLET }]}
                        onPress={() => this.props.navigation.navigate('Manifest')}>
                        <Text style={styles.touchableText}>DELIVER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsView}>
                    <TouchableOpacity style={[styles.touchableView, { backgroundColor: COLOR_GRAY_3 }]} >
                        <Text style={styles.touchableText}>ONGOING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableView, { backgroundColor: COLOR_GRAY_3 }]} >
                        <Text style={styles.touchableText}>PAST</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: COLOR_WHITE,
    },
    logo: {
        height: 50,
        width: '100%',
        marginRight: 30,
        resizeMode: 'contain',
        backgroundColor: COLOR_ISABELLINE
    },
    headerView: {
        backgroundColor: '#ECECEC'
    },
    welcomeNote: {
        height: 50,
        fontSize: 25,
        margin: 10,
        color: '#000000'
    },
    optionsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 15
    },
    touchableView: {
        height: 150,
        width: '40%',
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableText: {
        color: COLOR_WHITE,
        fontSize: 20,
        fontWeight: 'bold'
    }
});