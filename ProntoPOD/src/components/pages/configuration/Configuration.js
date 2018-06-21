import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Picker,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    ActionSheetIOS
} from 'react-native';
import {
    COLOR_ISABELLINE,
    COLOR_BLACK,
    COLOR_WHITE,
    COLOR_DARKBLUE,
    COLOR_GRAY_6,
    COLOR_GRAY_1,
    COLOR_UFO_GREEN,
    COLOR_TRANSPARENT
} from '../../../constants/colors';
import BorderBox from '../../controls/borderBox';
import ImgProntoLogo from '../../../assets/images/prontoLogo.png';
import ImgPasswordVisibleIcon from '../../../assets/images/visibility.png';
import ImgUrl from '../../../assets/images/url.png';
import ImgUsernameIcon from '../../../assets/images/username.png';
import ImgPasswordIcon from '../../../assets/images/password.png';
import ImgDevice from '../../../assets/images/device.png';
import GlobalStyleSheet from '../../../constants/styles';
import { PASSWORD, USERNAME, DEVICE_NAME, SELECT_CARRIER, TRUCK_ID, ENTER_PROPER_CREDENTIALS, 
    MSG_INVALID_CREDENTIALS, MSG_PROFILE_CREATED } from '../../../constants/strings';

export default class Configuration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordVisibility: true,
            userConnectivity: false,
            truckID: '',
            deviceName: '',
            url: '',
            carrier: 'SELECT CARRIER'
        }
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const pickerOptions = ['AB1234', 'AD1258', 'HJ23522', 'CANCEL'];
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView >
                    <View style={styles.headerLogoView}>
                        <Image source={ImgProntoLogo} style={styles.logo} />
                    </View>
                    <ScrollView>
                        <View style={styles.viewContainer}>
                            <Text style={styles.textContainer}>CONFIGURE DEVICE</Text>
                            <View style={styles.textBoxView}>
                                <BorderBox styles={styles.borderBoxStyle}  >
                                    <Image style={styles.showIcon} source={ImgUrl} />
                                    <TextInput placeholder='URL' underlineColorAndroid={COLOR_TRANSPARENT} style={styles.textBox}
                                        onChangeText={(value) => { this.setState({ url: value }) }} />
                                </BorderBox>
                            </View>
                            <View style={styles.textBoxView}>
                                <BorderBox styles={styles.borderBoxStyle}  >
                                    <Image style={styles.showIcon} source={ImgUsernameIcon} />
                                    <TextInput placeholder={USERNAME} underlineColorAndroid={COLOR_TRANSPARENT} style={styles.textBox}
                                        onChangeText={(value) => { this.setState({ username: value }) }} />
                                </BorderBox>
                            </View>
                            <View style={styles.textBoxView}>
                                <BorderBox styles={styles.borderBoxStyle}  >
                                    <Image style={styles.showIcon} source={ImgPasswordIcon} />
                                    <View style={[GlobalStyleSheet.flexRow, GlobalStyleSheet.width86perc]}>
                                        <TextInput placeholder={PASSWORD} underlineColorAndroid={COLOR_TRANSPARENT}
                                            style={[styles.textBox, GlobalStyleSheet.width86perc]}
                                            onChangeText={(value) => { this.setState({ password: value }) }}
                                            secureTextEntry={this.state.passwordVisibility} />
                                        <TouchableOpacity style={styles.showIconTouchable}
                                            onPress={() => { this.setState({ passwordVisibility: !(this.state.passwordVisibility) }) }}>
                                            <Image style={styles.showIcon} source={ImgPasswordVisibleIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </BorderBox>
                            </View>
                            {
                                this.state.userConnectivity ?
                                    (<View>
                                        <TouchableOpacity style={styles.connectedTouchable} disabled={true} >
                                            <Text style={styles.connectedText}>CONNECTED</Text>
                                        </TouchableOpacity>
                                    </View>) :
                                    (<View>
                                        <TouchableOpacity style={styles.loginTouchable}
                                            onPress={() => { this.connect(); }}>
                                            <Text style={styles.loginText}>CONNECT</Text>
                                        </TouchableOpacity>
                                    </View>)
                            }
                        </View>
                        <View style={[styles.viewContainer, GlobalStyleSheet.marginTop30]}>
                            <Text style={styles.textContainer}>SELECT CARRIER</Text>
                            <View style={styles.textBoxView}>
                                <BorderBox styles={styles.borderBoxStyle}  >
                                    <Image style={styles.showIcon} source={ImgDevice} />
                                    <TextInput placeholder={DEVICE_NAME} underlineColorAndroid={COLOR_TRANSPARENT} style={styles.textBox}
                                        onChangeText={(value) => { this.setState({ deviceName: value }) }} />
                                </BorderBox>
                            </View>
                            <View style={[GlobalStyleSheet.border, GlobalStyleSheet.borderRadius5, GlobalStyleSheet.height50]}>
                                {
                                    Platform.OS == 'ios' &&
                                    <TouchableOpacity style={{ height: '100%', justifyContent: 'center', padding: 10 }}
                                        onPress={() => ActionSheetIOS.showActionSheetWithOptions({
                                            options: pickerOptions,
                                            cancelButtonIndex: 3
                                        },
                                            (buttonIndex) => {
                                                if (pickerOptions[buttonIndex] != 'CANCEL') {
                                                    this.setState({ carrier: pickerOptions[buttonIndex] })

                                                }
                                            })}>
                                        <Text>{this.state.carrier}</Text>
                                    </TouchableOpacity>

                                }
                                {
                                    Platform.OS == 'android' &&
                                    <Picker style={styles.pickerView} selectedValue={this.state.truckID} prompt={TRUCK_ID} mode='dropdown'
                                        onValueChange={(value) => { this.setState({ truckID: value }) }}>
                                        <Picker.Item label={SELECT_CARRIER} value={SELECT_CARRIER} />
                                        <Picker.Item label="15R01A" value="15R01A" />
                                    </Picker>
                                }
                            </View>
                            {
                                !(this.state.userConnectivity) ?
                                    (<View>
                                        <TouchableOpacity style={styles.disableTouchable} disabled={true}>
                                            <Text style={styles.loginText}>CREATE PROFILE</Text>
                                        </TouchableOpacity>
                                    </View>) :
                                    (<View>
                                        <TouchableOpacity style={[styles.loginTouchable, { backgroundColor: COLOR_DARKBLUE }]}
                                            disabled={!(this.state.userConnectivity)}
                                            onPress={() => { this.createProfile(); }}>
                                            <Text style={styles.loginText}>CREATE PROFILE</Text>
                                        </TouchableOpacity>
                                    </View>)
                            }
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }

    connect() {
        if (true || (this.state.username != '' && this.state.password != '' && this.state.url != '')) {
            this.setState({ userConnectivity: true });
            return true;
        }
        else {
            alert(MSG_INVALID_CREDENTIALS);
            return false;
        }
    }
    
    createProfile() {
        if (this.state.deviceName != '') {
            alert(MSG_PROFILE_CREATED);
            this.props.navigation.navigate('Login');
        }
        else {
            alert(MSG_INVALID_CREDENTIALS);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: COLOR_WHITE,
        alignItems: 'center'
    },
    textContainer: {
        marginBottom: 10,
        color: COLOR_BLACK
    }
    ,
    headerLogoView: {
        height: 50,
        backgroundColor: COLOR_GRAY_6,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    viewContainer: {

        marginLeft: 30,
        marginRight: 30,
    },
    logo: {
        height: 40,
        width: '80%',
        resizeMode: 'contain',
    },
    pickerView: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    },
    textBoxView: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: COLOR_WHITE,
        marginBottom: 10
    },
    textBox: {
        height: 50,
        padding: 10,
        fontSize: 15,
        width: '86%',
    },
    showIconTouchable: {
        justifyContent: 'center'
    },
    showIcon: {
        height: 20,
        width: 30,
        resizeMode: 'contain',
    },
    loginTouchable: {
        backgroundColor: COLOR_GRAY_1,
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
        elevation: 5
    },
    loginText: {
        color: COLOR_WHITE,
        fontSize: 18,
        textAlign: 'center'
    },
    connectedTouchable: {
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: COLOR_UFO_GREEN,
        borderWidth: 1
    },
    connectedText: {
        fontSize: 18,
        textAlign: 'center',
        color: COLOR_UFO_GREEN
    },
    disableTouchable: {
        backgroundColor: COLOR_ISABELLINE,
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
    },
    borderBoxStyle: {
        height: 50,
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        borderColor: COLOR_BLACK,
        backgroundColor: COLOR_ISABELLINE,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
