import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { COLOR_GRAY_5, COLOR_BLACK, COLOR_OLD_SILVER } from '../../../constants/colors';
import GlobalStyleSheet from '../../../constants/styles';
import { PRESSANDHOLD } from '../../../constants/strings';

export default class ItemListScreen extends Component {
  static navigationOptions = {
    title = 'Item List',
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={[GlobalStyleSheet.container, { backgroundColor: COLOR_GRAY_5 }]}>
            <Text style={[GlobalStyleSheet.textRegular, GlobalStyleSheet.fontItalic ]}>
              {PRESSANDHOLD}
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}