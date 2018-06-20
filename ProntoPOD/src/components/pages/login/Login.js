import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import {
  COLOR_ISABELLINE,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_VIOLET,
  COLOR_DARKBLUE,
  COLOR_GRAY_6,
  COLOR_TRANSPARENT
} from '../../../constants/colors';
import BorderBox from '../../controls/borderBox';
import ImgProntoLogo from '../../../assets/images/prontoLogo.png';
import ImgPasswordVisibleIcon from '../../../assets/images/visibility.png';
import { StackActions, NavigationActions } from 'react-navigation';
import ImgUsernameIcon from '../../../assets/images/username.png';
import ImgPasswordIcon from '../../../assets/images/password.png';
import { fetchOrderList } from '../../../redux/actions/orderListActions';
import { connect } from 'react-redux';
import GlobalStyleSheet from '../../../constants/styles';
import { 
  USERNAME,
  LOGIN,
  FORGOT_PASSWORD,
  EMPLOYEE,
  PASSWORD,
  INCORRECT_USERNAME_PASSWORD,
  INCORRECT_USERNAME,
  CONTRACTOR
} from '../../../constants/strings';

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordVisibility: true,
      employee: true,
      TruckID: '',
    }
  }
  static navigationOptions = { title: 'LOGIN' }

  render() {
    const borderBoxStyle = {
      height: 50,
      flexDirection: 'row',
      width: '100%',
      borderRadius: 5,
      borderColor: COLOR_BLACK,
      backgroundColor: COLOR_ISABELLINE,
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView >
          <ScrollView>
            <View style={styles.headerLogoView}>
              <Image source={ImgProntoLogo} style={styles.logo} />
            </View>
            <View style={styles.viewContainer}>
              <View style={styles.toggleContainer}>
                <TouchableOpacity
                  style={[GlobalStyleSheet.borderRight, GlobalStyleSheet.borderTopLeftRadius5, GlobalStyleSheet.borderBottomLeftRadius5,
                  this.state.employee ? { backgroundColor: COLOR_VIOLET } : { backgroundColor: COLOR_WHITE },
                  styles.toogleContainerUnselected]}
                  onPress={() => { this.setState({ employee: true }) }}>
                  <Text style={this.state.employee ? styles.selectedText : styles.unselectedText}>{EMPLOYEE}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyleSheet.borderTopRightRadius5, GlobalStyleSheet.borderBottomRightRadius5,
                this.state.employee ? { backgroundColor: COLOR_WHITE } : { backgroundColor: COLOR_VIOLET },
                styles.toogleContainerUnselected]}
                  onPress={() => { this.setState({ employee: false }) }}>
                  <Text style={this.state.employee ? styles.unselectedText : styles.selectedText}>{CONTRACTOR}</Text>
                </TouchableOpacity>
              </View>
              {
                this.state.employee ?
                  (
                    <View>
                      <View style={styles.textBoxView}>
                        <BorderBox styles={borderBoxStyle}  >
                          <Image style={styles.showIcon} source={ImgUsernameIcon} />
                          <TextInput placeholder={USERNAME} underlineColorAndroid={COLOR_TRANSPARENT} style={styles.textBox}
                            onChangeText={(value) => { this.setState({ username: value }) }} />
                        </BorderBox>
                      </View>
                      <View style={styles.textBoxView}>
                        <BorderBox styles={borderBoxStyle}  >
                          <Image style={styles.showIcon} source={ImgPasswordIcon} />
                          <View style={[GlobalStyleSheet.width86perc, GlobalStyleSheet.flexRow]}>
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
                      <View>
                        <Text style={styles.forgotPassword}>{FORGOT_PASSWORD}</Text>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.loginTouchable} onPress={() => { this.employeeLogin() }}>
                          <Text style={styles.loginText}>{LOGIN}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>) : (
                    <View>
                      <View style={styles.textBoxView}>
                        <BorderBox styles={borderBoxStyle}  >
                          <Image style={styles.showIcon} source={ImgUsernameIcon} />
                          <TextInput placeholder={USERNAME} underlineColorAndroid={COLOR_TRANSPARENT} style={styles.textBox}
                            onChangeText={(value) => { this.setState({ username: value }) }} />
                        </BorderBox>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.loginTouchable}
                          onPress={() => { this.contractorLogin() }}>
                          <Text style={styles.loginText}>{LOGIN}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
              }
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  employeeLogin() {
    if (true || (this.state.username != '' && this.state.password != '')) {
      this.props.order();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'OrderList' })],
      });
      this.props.navigation.dispatch(resetAction);
    }
    else {
      alert(INCORRECT_USERNAME_PASSWORD);
    }
  }

  contractorLogin() {
    if (this.state.username != '') {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'OrderList' })],
      });
      this.props.navigation.dispatch(resetAction);
    }
    else {
      alert(INCORRECT_USERNAME)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: COLOR_WHITE,
  },
  headerContainer: {
    height: 50,
    elevation: 5,
    backgroundColor: COLOR_GRAY_6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR_BLACK
  }
  ,
  viewContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  headerLogoView: {
    height: 140,
  },
  logo: {
    height: 80,
    width: '80%',
    marginTop: 30,
    marginLeft: 30,
    resizeMode: 'contain'
  },
  pickerView: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: COLOR_WHITE,
    marginBottom: 10,
    height: 50
  },
  textBoxView: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: COLOR_WHITE
  },
  textBox: {
    height: 50,
    padding: 10,
    fontSize: 15,
    width: '86%'
  },
  showIconTouchable: {
    justifyContent: 'center'
  },
  showIcon: {
    height: 20,
    width: 30,
    resizeMode: 'contain'
  },
  forgotPassword: {
    color: COLOR_VIOLET,
    textDecorationLine: 'underline',
    marginBottom: 10,
    fontSize: 16
  },
  loginTouchable: {
    backgroundColor: COLOR_DARKBLUE,
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  loginText: {
    color: COLOR_WHITE,
    fontSize: 20,
    textAlign: 'center'
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderRadius: 6
  },
  toogleContainerUnselected: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 39,
  },
  selectedText: {
    fontSize: 18,
    color: COLOR_WHITE
  },
  unselectedText: {
    fontSize: 18,
    color: COLOR_VIOLET
  }
});

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = {
  order: () => fetchOrderList()
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);