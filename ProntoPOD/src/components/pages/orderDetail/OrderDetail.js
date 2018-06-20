import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import {
  STATUS,
  INSTRUCTIONS,
  ORDER_ID,
  INVOICE_ID,
  CUSTOMER_REFERENCE,
  PACKAGES,
  WEIGHT,
  VOLUME,
  NAVIGATE,
  CALL,
  DELIVER,
  MAPS_BASE_URL,
} from '../../../constants/strings';
import CustomButton from "../../controls/button";
import ImgNavigateIcon from '../../../assets/images/navigate.png';
import ImgCallIcon from '../../../assets/images/call.png';
import ImgDeliverIcon from '../../../assets/images/deliver.png';
import GlolbalStyleSheet from '../../../constants/styles';
import {
  COLOR_TEXT_BUTTON_PRIMARY,
  COLOR_TEXT_BUTTON_SECONDARY,
} from '../../../constants/colors';

const {
  fill,
  scrollViewContainer,
  container,
  absoluteContianer,
  textSemiBold,
  textRegular,
  statusSymbol,
  buttonPrimary,
  buttonSecondary,
  borderTop,
  borderRight,
  flexRow,
  flex1,
  justifySpaceAround,
  justifySpaceBetween,
  justifyCenter,
  padding15,
  alignItemsFlexEnd,
  marginRight,
  statusContainer,
  marginLeft,
  padding5,
  fontSize12,
  marginBottom65,
  lineHeight22,
  fontSize18
} = GlolbalStyleSheet;

export class OrderDetail extends Component {
  static navigationOptions = {
    title: 'Order Details',
  }

  constructor(props) {
    super(props);
  }

  navigate(lat, long) {
    let url = MAPS_BASE_URL + lat + '+' + long;
    Linking.openURL(url);
  }

  makeCall = (number) => {
    Linking.openURL(`tel:` + number)
  }

  render() {
    return (
      <View style={fill}>
        <ScrollView style={[scrollViewContainer, marginBottom65]} >
          <View style={[flexRow, borderTop, flex1, justifySpaceBetween]}>
            <View style={[container, padding15]}>
              <Text style={[textSemiBold, lineHeight22, fontSize18 ]}>
                {this.props.orderDetail.Customer.Name}
              </Text>
              <Text style={textRegular}>
                {this.props.orderDetail.DeliveryAddress}
              </Text>
              <Text style={textRegular}>
                {this.props.orderDetail.Customer.Address}
              </Text>
            </View>
            <View style={[marginRight, alignItemsFlexEnd, padding15,
              justifyCenter, flex1]}>
              <View style={statusContainer}>
                <View>
                  <Text style={textRegular} >
                    {STATUS}
                  </Text>
                  <Text style={textSemiBold} >
                    {this.props.orderDetail.Status}
                  </Text>
                </View>
                <View style={statusSymbol}></View>
              </View>
            </View>
          </View>
          <View style={[container, borderTop, padding15]}>
            <Text style={textSemiBold}>
              {INSTRUCTIONS}
            </Text>
            <Text style={textRegular}>
              {this.props.orderDetail.DeliveryInstructions}
            </Text>
          </View>
          <View style={[flexRow, borderTop]}>
            <View style={[container, padding15,
              borderRight, { flex: 1.2 }]}>
              <Text style={textSemiBold}>
                {PACKAGES}
              </Text>
              <Text style={textRegular}>
                {this.props.orderDetail.PackagesCount}
              </Text>
            </View>
            <View style={[container, borderRight, padding15]}>
              <Text style={textSemiBold}>
                {WEIGHT}
              </Text>
              <Text style={textRegular}>
                {this.props.orderDetail.Weight}
              </Text>
            </View>
            <View style={[container, padding15]}>
              <Text style={textSemiBold}>
                {VOLUME}
              </Text>
              <Text style={textRegular}>
                {this.props.orderDetail.Volume}
              </Text>
            </View>
          </View>
          <View style={[container, padding15, borderTop]}>
            <Text style={textSemiBold}>
              {ORDER_ID}
            </Text>
            <Text style={textRegular}>
              {this.props.orderDetail.Id}
            </Text>
          </View>
          <View style={[container, padding15, borderTop]}>
            <Text style={textSemiBold}>
              {INVOICE_ID}
            </Text>
            <Text style={[textRegular]}>
              {this.props.orderDetail.InvoiceId}
            </Text>
          </View>
          <View style={[container, padding15, borderTop]}>
            <Text style={textSemiBold}>
              {CUSTOMER_REFERENCE}
            </Text>
            <Text style={textRegular}>
              {this.props.orderDetail.Customer.Reference}
            </Text>
          </View>
        </ScrollView>
        <View style={[absoluteContianer, flexRow, alignItemsFlexEnd,
          justifySpaceAround]}>
          <CustomButton text={NAVIGATE}
            style={[buttonSecondary, marginLeft, padding5]}
            imageSource={ImgNavigateIcon}
            textStyle={[fontSize12, { color: COLOR_TEXT_BUTTON_SECONDARY }]}
            onPress={() => { this.navigate(this.props.orderDetail.Lat, this.props.orderDetail.Lang) }} />
          <CustomButton text={CALL}
            style={[buttonSecondary, padding5]}
            textStyle={[fontSize12, { color: COLOR_TEXT_BUTTON_SECONDARY }]}
            imageSource={ImgCallIcon}
            onPress={() => { this.makeCall(this.props.orderDetail.Customer.Mobile); }} />
          <CustomButton
            text={DELIVER}
            imageSource={ImgDeliverIcon}
            style={[buttonPrimary, marginRight, padding5]}
            textStyle={[fontSize12, { color: COLOR_TEXT_BUTTON_PRIMARY }]}
            onPress={() => { alert(DELIVER) }}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderDetail: state.orderDetailReducer.orderDetail
  }
}

const mapDispatchToProps = {
  // To be implemented in sprint 2.
  // deliver : (id) => fetchItemList(id)
}

export default connect(mapStateToProps)(OrderDetail);