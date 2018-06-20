import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import ManifestListItem from '../../controls/manifestListItem';
import { COLOR_GRAY_6 } from '../../../constants/colors';

export default class Manifest extends Component {
  static navigationOptions = {
    title: 'Manifest List'
  }
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ManifestListItem properties={this.props} />
          <ManifestListItem properties={this.props} />
          <ManifestListItem properties={this.props} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_GRAY_6,
    alignContent: 'center'
  },
});
