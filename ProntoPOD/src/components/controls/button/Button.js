import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import GlobalStyleSheet from '../../../constants/styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <TouchableOpacity style={[GlobalStyleSheet.buttonPrimary, this.props.style]}
        onPress={() => { this.props.onPress() }}>
        {this.props.imageSource &&
          <Image source={this.props.imageSource} style={[
            GlobalStyleSheet.buttonDefault,
            this.props.imageStyle]} />
        }
        {this.props.text &&
          <Text style={this.props.textStyle}>
            {this.props.text}
          </Text>
        }
      </TouchableOpacity>
    )
  }
}